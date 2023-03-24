import Pagination from './Pagination/Pagination';
import OfferCard from './OfferCard/OfferCard';
import { useState, useEffect } from 'react';
import useSessionStorage from './../../../hooks/useSessionStorage';


export default function OfferList({ results }) {
    const [page, setPage] = useSessionStorage('page');
    const [curPage, setCurPage] = useState(page || 1);
    const [resPerPage, setResPerPage] = useState(5);
    const [curResults, setCurResults] = useState([]);
    const [totalPages, setTotalPages] = useState(0);



    useEffect(() => {
        setTotalPages(Math.ceil(results.length / resPerPage))
        setCurResults(results.slice((curPage - 1) * resPerPage, curPage * resPerPage));
        
        if (totalPages && curPage > totalPages) setCurPage(1);
        setPage(curPage)


    }, [results, page, curPage, totalPages]);

    return (
        <>
            <ul className="offers-list">
                {curResults.map(res => <OfferCard key={res._id} {...res} />)}
            </ul>
            <Pagination props={{ totalPages, curPage, setCurPage }} />
        </>
    )
}
