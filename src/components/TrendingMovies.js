import React, { useEffect, useState } from 'react';

import Movie from './Movie';

function TrendingMovies() {
   const [trending, setTrending] = useState([]);

   useEffect(() => {
      async function fetchTrending() {
         const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
         );

         const movies = await response.json();
         setTrending(movies.results);
      }

      fetchTrending();
   }, []);

   return (
      <div className="movies-container container-padding">
         <h1 className="movies__heading">Trending</h1>
         <div className="movies">
            {trending &&
               trending.map((movie) => {
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

export default TrendingMovies;
