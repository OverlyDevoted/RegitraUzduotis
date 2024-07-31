import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 3000);
  }, [url]);

  return { data, isLoading };
};
