
export default function Pagination({props}) {
    const { totalPages, curPage, setCurPage } = props;
    


    

    function prevPage(e) {
        e.preventDefault();
        if(curPage <= 1) return;
        setCurPage(p => p - 1)
    }

    function nextPage(e) {
        e.preventDefault();
        if(curPage === totalPages) return;
        setCurPage(p => Number(p + 1) )
    }

    return (
        <div className="pagination">
            {totalPages ?
                <>
                    <button onClick={prevPage} className="pagination-arrow"><i className="fa-solid fa-chevron-left"></i></button>
                    <p className="page">{curPage}/{totalPages}</p>
                    <button onClick={nextPage} className="pagination-arrow"><i className="fa-solid fa-chevron-right"></i></button>
                </>
                : ''}

        </div>
    )
}
