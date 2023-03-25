import { Link } from "react-router-dom"

export default function Slide(props) {
    const [title, imageUrl] = props.category
    return (
        <div  className={props.active ? "carousel__link carousel__link-active" :  "carousel__link" } >
            <Link className="carousel__sign" to={`/category/${title}`}>Recent Deals in {title} </Link>
            <img  className="carousel__img skeleton" src={imageUrl} alt={title} />
        </div>
    )
}
