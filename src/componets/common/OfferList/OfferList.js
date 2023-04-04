import './OfferList.css'

import Pagination from './Pagination/Pagination';
import OfferCard from './OfferCard/OfferCard';
import { useState, useEffect } from 'react';
import useSessionStorage from './../../../hooks/useSessionStorage';


export default function OfferList({ results,resPerPage }) {
    const [curPage, setPage] = useSessionStorage('page');

    const [totalPages, setTotalPages] = useState(0);



    useEffect(() => {
        if(!curPage) setPage(1);

        setTotalPages(Math.ceil(results.length / resPerPage));
        
        if (totalPages && curPage > totalPages) setPage(1);

    }, [results, curPage,setPage, totalPages, resPerPage]);

    function changePage(page) {
        setPage(page);
        window.scrollTo({top: 200,
            behavior: "smooth"})
    }


    function resultsToShow(results) {
        return results.slice((curPage - 1) * resPerPage, curPage * resPerPage)
    }


    return (
        <>
            <ul className="offers-list">
                {resultsToShow(results).map(res => <OfferCard key={res._id} {...res} />)}
            </ul>
            <Pagination props={{ totalPages, curPage, changePage }} />
        </>
    )
}
