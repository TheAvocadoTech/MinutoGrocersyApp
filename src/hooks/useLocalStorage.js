import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) return initialValue;
      
      // Special handling for token - store as plain string
      if (key === 'token') {
        return item;
      }
      
      // For other values, try to parse as JSON
      try {
        return JSON.parse(item);
      } catch (parseError) {
        // If JSON parsing fails, return the raw string
        console.warn(`Failed to parse localStorage item "${key}" as JSON, returning raw value:`, parseError);
        return item;
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      // Special handling for token - store as plain string
      if (key === 'token') {
        if (valueToStore === null || valueToStore === undefined) {
          window.localStorage.removeItem(key);
        } else {
          window.localStorage.setItem(key, valueToStore);
        }
      } else {
        // For other values, stringify as JSON
        if (valueToStore === null || valueToStore === undefined) {
          window.localStorage.removeItem(key);
        } else {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key) {
        if (!e.newValue) {
          setStoredValue(initialValue);
          return;
        }
        
        // Special handling for token
        if (key === 'token') {
          setStoredValue(e.newValue);
        } else {
          try {
            setStoredValue(JSON.parse(e.newValue));
          } catch (parseError) {
            console.warn(`Failed to parse storage change for "${key}", using raw value:`, parseError);
            setStoredValue(e.newValue);
          }
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialValue]);

  return [storedValue, setValue];
};