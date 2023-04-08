import './Loading.css'

export default function Loading({color}) {

  return (
    <div style={{color}} className="loading"><p>Loading</p><span style={{color}} className="loader"></span></div>
  )
}
