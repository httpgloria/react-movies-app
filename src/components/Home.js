import React, { useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';

import NowPlaying from './Now Playing/NowPlaying';
import PopularMovies from './PopularMovies';
import TrendingMovies from './TrendingMovies';
import TopRatedMovies from './TopRatedMovies';

function Home() {
   const { setSearchTerm, setSearchData } = useContext(AppContext);

   useEffect(() => {
      setSearchTerm('');
      setSearchData({});
   }, []);

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
