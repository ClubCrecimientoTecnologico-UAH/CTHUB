import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('cthub-theme');
      return savedTheme || '';
    }
    return '';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cthub-theme', theme);
    }
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme; 