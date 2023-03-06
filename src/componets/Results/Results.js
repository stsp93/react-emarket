import { useParams, useSearchParams } from 'react-router-dom';
import { getCategoryResults, searchItems } from '../../api/data';
import { useState, useEffect } from 'react';

import OfferCard from './OfferCard/OfferCard';
import Carousel from './../Carousel/Carousel';


export default function Category() {
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // On category show
    useEffect(() => {
        (async () => {
            // Start fetch
            setLoading(true);
            const categoryResults = await getCategoryResults(category || '');
            setResults(categoryResults);

            // End fetch
            setLoading(false);
        })()
    }, [category]);


    // On Search
    useEffect(() => {
        const query = searchParams.get('q')
        if (query) {
            (async function () {
                // Start fetch
                setLoading(true);
                const res = await searchItems({ q: query });
                setResults(res);

                // End fetch
                setLoading(false);
            })()
        }
    }, [searchParams]);

    // Title with Results count
    function showTitle(results, loading) {
        if (loading) {
            return <h1>Loading...</h1>
        }
        if (results.length) {
            return <h2 className="title main-title">
                {results.length} Result{results.length === 1 ? '' : 's'} {searchParams.get('q') && `for '${searchParams.get('q')}'`}
            </h2>
        }
        // No Results
        return <>
            <h2 className="title main-title">No Results {searchParams.get('q') && `for '${searchParams.get('q')}'`}</h2>
            <Carousel />
        </>
    }

    return (
        <>
            {showTitle(results, loading)}
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
