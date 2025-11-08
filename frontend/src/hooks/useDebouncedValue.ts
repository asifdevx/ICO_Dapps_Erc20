import { useState, useEffect } from "react";

/**
 * useDebouncedValue
 * Returns [value, debouncedValue, setValue]
 * - `value` → immediate value (can be used for input)
 * - `debouncedValue` → value updated after delay
 * - `setValue` → setter to update immediate value
 */
export function useDebouncedValue<T>(initialValue: T, delay = 300) {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return [value, setValue, debouncedValue ] as const;
}
