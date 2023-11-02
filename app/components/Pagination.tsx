import React, { FC } from 'react'

interface PaginationPros {
    ordersPerPage: number,
    totalOrders: number,
    paginate: (number: number) => void,
    currentPage: number
}


const Pagination: FC<PaginationPros> = ({ ordersPerPage, totalOrders, paginate, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
    <div className='pagination'>

        {pageNumbers.map(number => 

            <div key={number} className={number === currentPage? 'pagination__button__active': 'pagination__button'} onClick={() => paginate(number)}>
                {number}
            </div>

        )}

    </div>
  )
}

export default Pagination