import React from 'react';

import Moment from 'moment';

function NowPlayingSlide({ backdrop, title, date, id, vote, desc }) {
   const dateFormat = Moment(date).format('MMM Do, YYYY');

   const imageApi = 'https://image.tmdb.org/t/p/w1280/';
   return (
      <div className="playing-slide">
         <div className="overlay playing-slide-img-wrapper">
            <img
               className="playing-slide__img"
               src={`${imageApi}${backdrop}`}
               alt=""
            />
         </div>
         <div className="playing-slide-info">
            <h1 className="playing-slide__title">{title}</h1>
            <div className="playling-slide-info__details">
               <a className="btn btn--slide" href="#">
                  Details
               </a>
               <p className="playing-slide__votes">{vote * 10}</p>
            </div>
            <p className="playing-slide__desc">{desc}</p>
            <p className="playing-slide__date">{dateFormat}</p>
         </div>
      </div>
   );
}

export default NowPlayingSlide;
