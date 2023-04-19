import { useState } from 'react'
import './DemoMessage.css'

export default function DemoMessage() {
    const [display, setDisplay] = useState({});

    function onClose() {
        setDisplay({display: 'none'})
    }
  return (
    <div style={display} className="demo-message">
        <h2>[LIVE DEMO]</h2>
        <p>You may need to refresh the page, because the REST Server go to sleep after 30min of inactivity</p>
        <button onClick={onClose} ><i className="fa-regular fa-circle-xmark"></i></button>
        </div>
  )
}
