import React, { useEffect, useState } from 'react';

import Movie from './Movie';

function PopularMovies() {
   const [popular, setPopular] = useState([]);

   useEffect(() => {
      async function fetchPopular() {
         const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
         );

         const movies = await response.json();
         setPopular(movies.results);
      }

      fetchPopular();
   }, []);

   return (
      <div className="movies-container container-padding">
         <h1 className="movies__heading">Popular</h1>
         <div className="movies">
            {popular &&
               popular.map((movie) => {
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

export default PopularMovies;
