import { useState } from 'react';

const useLocalStorage = (key:string, initialValue:null) => {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item === null ? initialValue : JSON.parse(item);
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = (value: any) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.log(e);
    }
  };

  return [storedValue, setLocalStorage];
};

export { useLocalStorage };
