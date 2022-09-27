import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContext } from './AppContext';

import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';

import './app.css';

function App() {
   const [searchData, setSearchData] = useState('');
   const [searchTerm, setSearchTerm] = useState('');
   const [currentPage, setCurrentPage] = useState(1);

   return (
      <div className="movie-app">
         <AppContext.Provider
            value={{
               searchData,
               setSearchData,
               searchTerm,
               setSearchTerm,
               currentPage,
               setCurrentPage,
            }}
         >
            <Router>
               <Header />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                     path="/search/:query/page/:number"
                     element={<SearchPage />}
                  />
                  <Route path="/movies/:id" element={<DetailsPage />}></Route>
               </Routes>
            </Router>
         </AppContext.Provider>
      </div>
   );
}

export default App;
