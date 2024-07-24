import { useState } from 'react';

export const useFilters = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);

  function changeFilters(key, value) {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  }
  return { filters, changeFilters };
};
