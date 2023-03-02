import Category from "./Category/Category"

export default function CategoryList(props) {
    const categories = props.categories
    return (
        <>
            <h2 className="title main-title">Categories</h2>
            <ul className="categories-list">
                {categories.map(category => <Category key={category[0]} category={category}></Category>)}
            </ul>
        </>

    )
}
