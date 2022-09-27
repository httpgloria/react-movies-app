import React, { useEffect, useState } from 'react';

import Movie from './Movie';

function TopRatedMovies() {
   const [top, setTop] = useState([]);

   useEffect(() => {
      async function fetchTop() {
         const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
         );

         const movies = await response.json();
         setTop(movies.results);
      }

      fetchTop();
   }, []);

   return (
      <div className="movies-container container-padding">
         <h1 className="movies__heading">Top-Rated</h1>
         <div className="movies">
            {top &&
               top.map((movie) => {
                  return (
                     <Movie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        date={movie.release_date}
                        vote={movie.vote_average}
                        poster={movie.poster_path}
                     />
                  );
               })}
         </div>
      </div>
   );
}

export default TopRatedMovies;
