import { useState } from 'react';

/**
 * Function to parse and set a value in the sessionStorage based on given key
 * @param {String} key 
 * @returns Array of value and a function to update the value
 */
export default function useSessionStorage(key) {
    const [value, setValue] = useState(() =>  JSON.parse(sessionStorage.getItem(key)));

    function setSessionStorage(newValue) {
        if(newValue){
            sessionStorage.setItem(key, JSON.stringify(newValue))
            setValue(newValue);
        } else {
            sessionStorage.removeItem(key);
            setValue(null);
        }
    }

    return [value, setSessionStorage]
}
