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
    const [resPerPage, setResPerPage] = useState(5);
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

    function resultsCountChange(e) {
        setResPerPage(e.target.value)
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
                        {results.length} Result{results.length === 1 ? '' : 's'} found {searchParams.get('q') && `for '${searchParams.get('q')}'`}
                    </h2>
                    <div className='results__input-wrapper'>
                        <select onChange={resultsCountChange} className='results__input results-per-page' name="sort-by" id="sort-by">
                            <option value="5">Show 5</option>
                            <option value="10">Show 10</option>
                            <option value="15">Show 15</option>
                            <option value="20">Show 20</option>
                        </select>
                        <select onChange={sortBy} className='results__input' name="sort-by" id="sort-by">
                            <option value="newest">Show newest</option>
                            <option value="oldest">Show oldest</option>
                            <option value="cheap">Show cheapest</option>
                            <option value="expensive">Show most expensive</option>
                        </select>
                    </div>
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
            <OfferList results={results} resPerPage={resPerPage} />
        </>
    )
}
