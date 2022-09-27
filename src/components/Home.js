import React from 'react';

import NowPlaying from './Now Playing/NowPlaying';
import PopularMovies from './PopularMovies';
import TrendingMovies from './TrendingMovies';
import TopRatedMovies from './TopRatedMovies';

function Home() {
   return (
      <>
         <NowPlaying />
         <PopularMovies />
         <TrendingMovies />
         <TopRatedMovies />
      </>
   );
}

export default Home;
