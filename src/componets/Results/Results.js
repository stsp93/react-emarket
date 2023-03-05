import { useParams, useSearchParams } from 'react-router-dom';
import { getCategoryResults, searchItems } from '../../api/data';
import { useState, useEffect } from 'react';

import OfferCard from './OfferCard/OfferCard';
import Carousel from './../Carousel/Carousel';


export default function Category() {
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);

    // On category show
    useEffect(() => {
        (async () => {
            const categoryResults = await getCategoryResults(category || '');
            setResults(categoryResults);
        })()
    }, [category]);


    // On Search
    useEffect(() => {
        const query = searchParams.get('q')
        if (query) {
            (async function () {
                const res = await searchItems({ q: query });
                setResults(res);
            })()
        }
    }, [searchParams])

    return (
        <>
            {results.length ?
                <h2 className="title main-title">
                    {results.length} Result{results.length === 1 ? '': 's'} {searchParams.get('q') && `for '${searchParams.get('q')}'`}
                </h2>
                : <>
                    <h2 className="title main-title">No Results {searchParams.get('q') && `for '${searchParams.get('q')}'`}</h2>
                    <Carousel />
                </>}

            <ul className="offers-list">
                {results.map(res => <OfferCard key={res._id} {...res} />)}

            </ul>

            {/* <!-- check if 0 offers  --> */}
            <div className="pagination">
                <button className="pagination-arrow"><i className="fa-solid fa-chevron-left"></i></button>
                <p className="page">1/2</p>
                <button className="pagination-arrow"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </>
    )
}
