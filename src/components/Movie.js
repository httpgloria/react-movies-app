import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';

function Movie({ title, date, vote, poster, id }) {
   const dateFormat = Moment(date).format('MMM Do, YYYY');

   const imageApi = 'https://image.tmdb.org/t/p/w500/';

   const votePercentage = Math.floor(vote * 10);

   function voteBorderColor() {
      if (votePercentage >= 70 && votePercentage <= 100) {
         return 'movie__votes--green';
      }

      if (votePercentage >= 40 && votePercentage <= 69) {
         return 'movie__votes--yellow';
      }

      if (votePercentage >= 0 && votePercentage <= 39) {
         return 'movie__votes--red';
      }
   }

   return (
      <div className="movie">
         {poster ? (
            <Link to={`/movies/${id}`}>
               <img
                  className="movie__img"
                  src={`${imageApi}${poster}`}
                  alt={title}
               />
            </Link>
         ) : (
            <div className="no-poster">Cover not available</div>
         )}

         <div className="movie-info">
            <Link to={`movies/${id}`}>
               <h3 className="movie__title">{title}</h3>
            </Link>
            <p className="movie__date">{date ? dateFormat : 'No Date'}</p>
         </div>
         <div className={`movie__votes ${voteBorderColor()}`}>
            {votePercentage}
         </div>
      </div>
   );
}

export default Movie;
