import { useState, useEffect } from 'react';
import { getAllCategories } from '../../../services/api/data';

export default function CategorySelect(props) {
    const [categories, setCategories] = useState([]);
    const {onChange, value} = props

    useEffect(() => {
        (async function () {
            try {
                const res = await getAllCategories();
                setCategories(Object.entries(res))
            } catch (error) {
                console.log(error);
            }

        })()
    }, []);
    return (
        <select value={value} onChange={onChange} name="category" id="category">
            {categories.length && categories.map(c => <option key={c[0]} value={c[0]}>{c[0]}</option>)}
        </select>
    )
}
