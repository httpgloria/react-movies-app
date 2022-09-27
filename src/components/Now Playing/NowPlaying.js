import React, { useEffect, useState } from 'react';

import NowPlayingSlider from './NowPlayingSlider';

function NowPlaying() {
   const [playing, setPlaying] = useState([]);

   function getRandoms(arr, num) {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());

      return shuffled.slice(0, num);
   }

   useEffect(() => {
      async function fetchNowPlaying() {
         const response = await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
         );

         const movies = await response.json();

         const randomMovies = getRandoms(movies.results, 4);

         setPlaying(randomMovies);
      }

      fetchNowPlaying();
   }, []);

   return (
      <div className="now-playing">
         {playing && <NowPlayingSlider data={playing} />}
      </div>
   );
}

export default NowPlaying;
