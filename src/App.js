import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContext } from './AppContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';
import NotFound from './components/NotFound';

import './app.css';

function App() {
   const [searchData, setSearchData] = useState({});
   const [searchTerm, setSearchTerm] = useState('');

   return (
      <div className="movie-app">
         <AppContext.Provider
            value={{
               searchData,
               setSearchData,
               searchTerm,
               setSearchTerm,
            }}
         >
            <Router>
               <div className="app-container">
                  <Header />
                  <Routes>
                     <Route path="*" element={<NotFound />} />
                     <Route path="/" element={<Home />} />
                     <Route
                        path="/search/:query/page/:number"
                        element={<SearchPage />}
                     />
                     <Route
                        path="/movies/:id"
                        element={<DetailsPage />}
                     ></Route>
                  </Routes>
                  <Footer />
               </div>
            </Router>
         </AppContext.Provider>
      </div>
   );
}

export default App;
