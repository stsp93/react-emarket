import './Results.css'

import { useParams, useSearchParams } from 'react-router-dom';
import { getCategoryResults, searchItems } from '../../services/api/data';
import { useState, useEffect } from 'react';

import Carousel from '../common/Carousel/Carousel';
import OfferList from '../common/OfferList/OfferList';
import Loading from './../Modal/Loading/Loading';


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
            console.log(results);
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
                const res = await searchItems({ q: query, cat: category });
                setResults(res);

                // End fetch
                setLoading(false);
            })()
        }
    }, [searchParams]);

    // on Sort

    const sortingMap = {
        'newest': () => setResults(res => [...res.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn))]),
        'oldest': () => setResults(res => [...res.sort((a, b) => new Date(a.createdOn) - new Date(b.createdOn))]),
        'cheap': () => setResults(res => [...res.sort((a, b) => a.price - b.price)]),
        'expensive': () => setResults(res => [...res.sort((a, b) => b.price - a.price)]),
    }

    function sortBy(e) {
        sortingMap[e.target.value]()
    }

    // Title with Results count
    function showTitle(results, loading) {
        if (loading) {
            return <Loading />
        }
        if (results.length) {
            return (
                <div className='title__wrapper'>
                    <h2 className="title main-title">
                        {results.length} Result{results.length === 1 ? '' : 's'} {searchParams.get('q') && `for '${searchParams.get('q')}'`}
                    </h2>
                    <select onChange={sortBy} className='results__sort' name="sort-by" id="sort-by">
                        <option value="newest">Show newest</option>
                        <option value="oldest">Show oldest</option>
                        <option value="cheap">Show cheapest</option>
                        <option value="expensive">Show most expensive</option>
                    </select>
                </div>)
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
