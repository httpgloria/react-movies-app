import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
   return (
      <div className="not-found container-padding">
         <h1>What you are looking for is not available.</h1>
         <Link className="not-found__link" to={'/'}>
            Go Back Home
         </Link>
      </div>
   );
}

export default NotFound;
