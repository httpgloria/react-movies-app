import React, { useContext, useEffect } from 'react';
import Pagination from './Pagination';
import { AppContext } from '../AppContext';
import { useLocation } from 'react-router-dom';

import Movie from './Movie';

function SearchPage() {
   const { searchData, setSearchData, searchTerm, currentPage } =
      useContext(AppContext);
   const searchQuery = encodeURIComponent(searchTerm);
   const location = useLocation();

   useEffect(() => {
      async function getSearchResults() {
         const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchQuery}&page=${currentPage}&include_adult=false`
         );

         const movies = await response.json();

         setSearchData(movies);
      }

      getSearchResults();
   }, [location.pathname]);

   return (
      <div className="search-results container-padding">
         <h1 className="movies__heading search-results-heading">
            Search Results
         </h1>
         <div className="search-movies">
            {searchData.results &&
               searchData.results.map((movie) => {
                  return (
                     <Movie
                        key={movie.id}
                        title={movie.title}
                        date={movie.release_date}
                        vote={movie.vote_average}
                        poster={movie.poster_path}
                     />
                  );
               })}
         </div>
         <Pagination pages={searchData.total_pages} />
      </div>
   );
}

export default SearchPage;
