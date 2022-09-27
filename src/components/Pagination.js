import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Link } from 'react-router-dom';

function Pagination({ pages }) {
   const { searchTerm, currentPage, setCurrentPage } = useContext(AppContext);
   const pageNumbers = [];

   for (let i = 1; i < pages + 1; i++) {
      pageNumbers.push(i);
   }

   function changePageNumber(num) {
      setCurrentPage(num);
   }

   return (
      <div className="pagination">
         {pageNumbers.map((number) => (
            <li
               className={
                  currentPage == number
                     ? `pagination__item pagination__item--active`
                     : 'pagination__item'
               }
               key={number}
            >
               <Link
                  onClick={() => changePageNumber(number)}
                  to={`/search/${encodeURIComponent(
                     searchTerm
                  )}/page/${number}`}
               >
                  {number}
               </Link>
            </li>
         ))}
      </div>
   );
}

export default Pagination;
