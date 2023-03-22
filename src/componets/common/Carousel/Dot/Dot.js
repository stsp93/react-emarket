export default function Dot(props) {
    const {indexUpdate, i} = props.indexHandle
    const dot = props?.active ?<i className="active-dot fa-solid fa-minus"></i>: <i className="fa-solid fa-minus"></i>;
  return (
    <li onClick={indexUpdate.bind(this, i)} className="carousel__dot">{dot}</li>
  )
}
