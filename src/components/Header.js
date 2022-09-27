import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';

import logo from '../assets/logo.png';

import { IoSearch } from 'react-icons/io5';

function Header() {
   const { searchTerm, setSearchTerm, setCurrentPage } = useContext(AppContext);

   return (
      <header className="header">
         <Link to="/">
            <img className="logo" src={logo} alt="" />
         </Link>
         <div className="search-bar">
            <input
               className="search-input"
               type="text"
               placeholder="Search..."
               value={searchTerm}
               onChange={(e) => {
                  setSearchTerm(e.target.value);
               }}
            />
            <Link
               onClick={() => setCurrentPage(1)}
               to={`/search/${encodeURIComponent(searchTerm)}/page/1`}
            >
               <button className="search-button" type="button">
                  <IoSearch size={20} color="#dbdbdb" />
               </button>
            </Link>
         </div>
      </header>
   );
}

export default Header;
