import { Link } from "react-router-dom"

export default function Category(props) {
    const [title, imageUrl] = props.category
    return (
        <li className="category">
            <Link to={`/${title}`}
            ><img src={imageUrl} alt={title} />
                <p>{title}</p>
            </Link>
        </li>
    )
}
