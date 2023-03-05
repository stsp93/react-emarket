import Category from "./Category/Category"
import { useEffect, useState } from 'react';
import { getAllCategories } from '../../api/data';

export default function CategoryList() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Fetch all categories
        (async () => {
            const data = await getAllCategories()
            setCategories(Object.entries(data));
        })();

    }, []);

    return (
        <>
            <h2 className="title main-title">Categories</h2>
            <ul className="categories-list">
                {categories.map(category => <Category key={category[0]} category={category} />)}
            </ul>
        </>

    )
}
