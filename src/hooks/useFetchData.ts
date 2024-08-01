import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchData = <T>(url: string, timeout: number = 3000) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) return;
    const controller = new AbortController();
    setTimeout(() => {
      axios
        .get(url, { signal: controller.signal })
        .then((response) => {
          setData(response.data);
        })
        .catch(() => {})
        .finally(() => setIsLoading(false));
    }, timeout);

    return () => {
      controller.abort();
    };
  }, [url, timeout, data]);

  const invalidate = () => {
    setData(null);
    setIsLoading(true);
  };
  return { data, setData, isLoading, invalidate };
};
