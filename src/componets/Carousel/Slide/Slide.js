import { Link } from "react-router-dom"

export default function Slide(props) {
    const [title, imageUrl] = props.category
    return (
        <Link  className={props.active ? "carousel__link carousel__link-active" :  "carousel__link" } to={`/${title}`}>
            <div className="carousel__sign">Recent Deals in {title} </div>
            <img  className="carousel__img skeleton" src={imageUrl} alt={title} />
        </Link>
    )
}
