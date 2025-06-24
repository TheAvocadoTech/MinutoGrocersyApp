import { useState, useEffect } from 'react';

/**
 * Custom hook for managing localStorage with React state
 * @param {string} key - The localStorage key
 * @param {any} initialValue - The initial value if no value exists in localStorage
 * @returns {[any, Function]} - Returns [value, setValue] similar to useState
 */
export const useLocalStorage = (key, initialValue) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Save state
      setStoredValue(valueToStore);
      
      // Save to local storage
      if (typeof window !== "undefined") {
        if (valueToStore === null || valueToStore === undefined) {
          window.localStorage.removeItem(key);
        } else {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Listen for changes to localStorage from other tabs/windows
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.error(`Error parsing localStorage value for key "${key}":`, error);
        }
      } else if (e.key === key && e.newValue === null) {
        // Handle removal
        setStoredValue(initialValue);
      }
    };

    // Listen for storage events
    window.addEventListener('storage', handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue];
};

// Alternative hook that returns an object with more methods
export const useLocalStorageAdvanced = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  const remove = () => {
    setValue(null);
  };

  const clear = () => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(key);
        setValue(initialValue);
      } catch (error) {
        console.error(`Error clearing localStorage key "${key}":`, error);
      }
    }
  };

  const getItem = () => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error getting localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  return {
    value,
    setValue,
    remove,
    clear,
    getItem
  };
};

// Hook for managing multiple localStorage items
export const useLocalStorageMultiple = (items) => {
  const [values, setValues] = useState(() => {
    if (typeof window === "undefined") {
      return items.reduce((acc, { key, initialValue }) => {
        acc[key] = initialValue;
        return acc;
      }, {});
    }

    return items.reduce((acc, { key, initialValue }) => {
      try {
        const item = window.localStorage.getItem(key);
        acc[key] = item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error(`Error reading localStorage key "${key}":`, error);
        acc[key] = initialValue;
      }
      return acc;
    }, {});
  });

  const setMultipleValues = (updates) => {
    setValues(prevValues => {
      const newValues = { ...prevValues, ...updates };
      
      // Update localStorage for each changed value
      Object.entries(updates).forEach(([key, value]) => {
        try {
          if (typeof window !== "undefined") {
            if (value === null || value === undefined) {
              window.localStorage.removeItem(key);
            } else {
              window.localStorage.setItem(key, JSON.stringify(value));
            }
          }
        } catch (error) {
          console.error(`Error setting localStorage key "${key}":`, error);
        }
      });
      
      return newValues;
    });
  };

  const setSingleValue = (key, value) => {
    setMultipleValues({ [key]: value });
  };

  return [values, setMultipleValues, setSingleValue];
};

export default useLocalStorage;