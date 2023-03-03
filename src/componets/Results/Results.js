import { useParams } from 'react-router-dom';
import { getCategoryResults } from '../../api/data';
import { useState, useEffect } from 'react';
import OfferCard from './OfferCard/OfferCard';
import Carousel from './../Carousel/Carousel';


export default function Category() {
    const { category } = useParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        (async () => {
            const categoryResults = await getCategoryResults(category);
            setResults(res => categoryResults);
        })()


    }, [category])

    return (
        <>
            {results.length ? <h2 className="title main-title">{results.length} Offers found</h2> :
                <>
                    <h2 className="title main-title">No Offers found...</h2>
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
