import { useState } from 'react';

export default function useSessionStorage() {
    const [value, setValue] = useState(() =>  JSON.parse(sessionStorage.getItem('session')));

    function setSessionStorage(newValue) {
        if(newValue){
            sessionStorage.setItem('session', JSON.stringify(newValue))
            setValue(newValue);
        } else {
            sessionStorage.removeItem('session');
            setValue(null);
        }
    }

    return [value, setSessionStorage]
}
