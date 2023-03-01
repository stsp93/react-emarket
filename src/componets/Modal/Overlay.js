import { useEffect, useState } from 'react';


export default function Overlay(props) {

    const [opacity, setOpacity] = useState(0);

useEffect(() => {
    setOpacity(0.5)
},[])

    return (
        <div onClick={props.closeModal} className="overlay" style={{opacity}}></div>
    )
}
