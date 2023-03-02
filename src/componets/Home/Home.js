import Carousel from './../Carousel/Carousel';
import CategoryList from './../CategoryList/CategoryList';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../../api/data';

export default function Home() {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Fetch all categories
        (async () => {
            const data = await getAllCategories()
            setCategories(cat => Object.entries(data));
        })();

    }, [])

    return (
        <>
            <Carousel categories={categories} />
            <CategoryList categories={categories} />
        </>
    )
}
