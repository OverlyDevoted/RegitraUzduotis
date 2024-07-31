import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchData = <T>(url: string, timeout: number = 3000) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) return;
    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => setIsLoading(false));
    }, timeout);
  }, [url, timeout, data]);

  const invalidate = () => {
    setData(null);
    setIsLoading(true);
  };
  return { data, setData, isLoading, invalidate };
};
