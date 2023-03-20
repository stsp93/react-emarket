export default function Dot(props) {
    const {indexUpdate, i} = props.indexHandle
    const dot = props?.active ?<i className="fa-solid fa-circle"></i>: <i className="fa-regular fa-circle"></i>;
  return (
    <li onClick={indexUpdate.bind(this, i)} className="carousel__dot">{dot}</li>
  )
}
