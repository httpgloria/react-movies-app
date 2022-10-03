import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

function Pagination({ pages }) {
   const { searchTerm } = useContext(AppContext);
   const navigate = useNavigate();

   function pageChange({ selected }) {
      navigate(
         `/search/${encodeURIComponent(searchTerm)}/page/${selected + 1}`
      );
   }

   return (
      <div className="pagination">
         <ReactPaginate
            breakLabel="..."
            previousLabel="<"
            nextLabel=">"
            pageCount={pages}
            onPageChange={pageChange}
            pageRangeDisplayed={5}
            containerClassName={'pagination-btns'}
            activeClassName={'pagination-active'}
         />
      </div>
   );
}

export default Pagination;
