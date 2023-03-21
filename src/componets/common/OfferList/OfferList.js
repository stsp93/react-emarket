import Pagination from './Pagination/Pagination';
import OfferCard from './OfferCard/OfferCard';
import { useState, useEffect } from 'react';
import useSessionStorage from './../../../hooks/useSessionStorage';


export default function OfferList({ results }) {
    const [page, setPage] = useSessionStorage('page');
    const [curPage, setCurPage] = useState(page);
    const [resPerPage, setResPerPage] = useState(5);
    const [curResults, setCurResults] = useState([]);
    const [totalPages, setTotalPages] = useState(1);



    useEffect(() => {
        setTotalPages(Math.ceil(results.length / resPerPage))
        setCurResults(results.slice((curPage - 1) * resPerPage, curPage * resPerPage));
        setPage(curPage)
    }, [results, curPage, resPerPage]);

    return (
        <>
            <ul className="offers-list">
                {curResults.map(res => <OfferCard key={res._id} {...res} />)}
            </ul>

            {/* <!-- check if 0 offers  --> */}
            <Pagination props={{ totalPages, curPage, setCurPage }} />
        </>
    )
}
