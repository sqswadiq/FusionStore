import React from 'react'

function Pagination({totalProducts,cardsPerPage,setCurrentPage,currentPage}) {

  const pages=[]
  console.log(pages);
  

  for(let i=1;i<=Math.ceil(totalProducts/cardsPerPage);i++){
    pages.push(i)    
  }

  const handlePrev=()=>{
    if (currentPage>1) {
      setCurrentPage(currentPage-1)
    }
  }
  const handleNext=()=>{
    if (currentPage<pages.length) {
      setCurrentPage(currentPage+1)
    }
  }
  return (
    <div className='mb-1 text-center d-flex align-items-center justify-content-center'>
      <button onClick={handlePrev} className='btn text-secondary border border-0' disabled={currentPage==1}>
      <i class="fa-regular fa-circle-left fs-4"></i>
      </button>
    { pages?.map(page=>(
      <button onClick={()=>{setCurrentPage(page)}} className={`btn text-primary btn-outline-secondary mx-1 ${currentPage==page? `active`:``}`} style={{borderRadius:'50%'}}>{page}</button>
    ))
    }

      <button onClick={handleNext} className='btn text-secondary border border-0' disabled={currentPage==pages.length}>
      <i class="fa-regular fa-circle-right fs-4"></i>
      </button>
    </div>
  )
}

export default Pagination