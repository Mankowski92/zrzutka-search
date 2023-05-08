import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useDebounceMinCharacters = (
  value: string,
  delay: number,
  minCharacters = 2
) => {
  const debouncedSearchTerm = useDebounce(value, delay);
  return debouncedSearchTerm?.length >= minCharacters
    ? debouncedSearchTerm
    : undefined;
};
