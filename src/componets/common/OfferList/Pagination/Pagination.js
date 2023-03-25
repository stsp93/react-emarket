import './Pagination.css'
import PageNumbers from './PageNumbers/PageNumbers';


export default function Pagination({ props }) {
    const { totalPages, curPage, changePage } = props;

    function prevPage(e) {
        e.preventDefault();
        if (curPage <= 1) return;
        changePage(curPage - 1)
    }

    function nextPage(e) {
        e.preventDefault();
        if (curPage === totalPages) return;
        changePage(curPage + 1)
    }



    return (
        <div className="pagination">
            {totalPages > 1 &&
                <>
                    {curPage > 1 && <button onClick={prevPage} className="pagination-arrow"><i className="fa-solid fa-chevron-left"></i> Prev</button>}
                    <PageNumbers curPage={curPage} totalPages={totalPages} changePage={changePage} />
                    {curPage < totalPages && <button onClick={nextPage} className="pagination-arrow">Next <i className="fa-solid fa-chevron-right"></i></button>}
                </>
            }

        </div>
    )
}
