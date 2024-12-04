import { useEffect, useState } from 'react';

interface FetchFunction<P, T> {
  (params?: P): Promise<T>;
}

export const useFetch = <T, P>(
  fetchFunction: FetchFunction<P, T>,
  params?: P
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const stingParams = params ? new URLSearchParams(params).toString() : '';

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFunction(params);
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction, stingParams]);

  return { data, isLoading, error };
};
