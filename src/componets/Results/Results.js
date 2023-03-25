import { useParams, useSearchParams } from 'react-router-dom';
import { getCategoryResults, searchItems } from '../../services/api/data';
import { useState, useEffect } from 'react';

import Carousel from '../common/Carousel/Carousel';
import OfferList from '../common/OfferList/OfferList';


export default function Results() {
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
        const query = searchParams.get('q');
        const category = searchParams.get('cat');
        if (query) {
            (async function () {
                // Start fetch
                setLoading(true);
                const res = await searchItems({ q: query, cat:category });
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
            <OfferList results={results} />
        </>
    )
}
