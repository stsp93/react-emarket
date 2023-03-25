
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../../../services/api/data';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState();
    const [categories, setCategories] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const data = await getAllCategories()
            setCategories(Object.keys(data));
        })();
    },[])


    function handleSearchClick(e) {
        e.preventDefault();
        let queryString = `/search?q=${query}`

        if (query === '') {
            return navigate('/');
        }
        if(selectedCategory) {
            queryString += `&cat=${selectedCategory}`
        }


        navigate(queryString);
    }

    function onSearchQueryChange(e) {
        setQuery(e.target.value);
    }

    function onCategoryChange(e) {
        setSelectedCategory(e.target.value)
    }

    return (
        <form>
            <div className='search-wrapper'>
                <select onChange={onCategoryChange} className='search-categories'>
                    <option value="">All categories</option>
                    
                    {categories && categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <input value={query} onChange={onSearchQueryChange} className="search-box" type="text" maxLength="30" placeholder="Search anything..." />
                <button onClick={handleSearchClick} className="search-box__button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </form>
    )
}
