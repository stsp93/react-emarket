export default function PageNumbers({ totalPages, curPage, changePage }) {

  // Dots logic
  const pageNumbers = [];
  let startIndex = 0;
  let endIndex = totalPages;

  if (curPage - 3 > 0) {
    startIndex = curPage - 2;
    pageNumbers.push(1, 'prevDots')
  }

  if (curPage + 2 < totalPages) {
    endIndex = curPage + 1
  }

  for (let i = startIndex; i < endIndex; i++) {
    pageNumbers.push(i + 1);
  }

  if (curPage + 2 < totalPages) {
    pageNumbers.push('nextDots', totalPages)
  }


  return (
    <div className="page-numbers">
      {pageNumbers.map(p => {
        if (p === 'prevDots') return <button onClick={() => changePage(curPage - 2)} className="page-number" key={p} >...</button>
        if (p === 'nextDots') return <button onClick={() => changePage(curPage + 2)} className="page-number" key={p} >...</button>
        if (curPage === p) return <button className="page-number current-page" key={p} onClick={() => changePage(p)} >{p}</button>
        return <button className="page-number" key={p} onClick={() => changePage(p)} >{p}</button>
      })}
    </div>
  )
}
