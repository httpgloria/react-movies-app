import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noProfile from '../assets/img/no-profile.jpg';

import NotFound from './NotFound';

function DetailsPage() {
   const [details, setDetails] = useState();
   const [cast, setCast] = useState();
   let { id } = useParams();

   const imageApi = 'https://image.tmdb.org/t/p/w500';
   const backdropApi = 'https://image.tmdb.org/t/p/w1280';
   const posterApi = 'https://image.tmdb.org/t/p/w500';

   useEffect(() => {
      async function fetchDetails() {
         const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
         );

         const movieDetails = await response.json();
         setDetails(movieDetails);
      }

      async function fetchCast() {
         const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
         );

         const castDetails = await response.json();
         setCast(castDetails);
      }

      fetchDetails();
      fetchCast();
   }, []);

   return (
      <>
         {id != 'undefined' ? (
            <div className="details">
               {details && (
                  <div className="details-header">
                     {' '}
                     <div className="overlay details-backdrop-wrapper">
                        <img
                           className="details__backdrop"
                           src={`${backdropApi}${details.backdrop_path}`}
                           alt={details.title}
                        />
                     </div>
                     <div className="details-summary-container container-padding">
                        <img
                           className="details__poster"
                           src={`${posterApi}${details.poster_path}`}
                           alt=""
                        />
                        <div className="details__summary">
                           <h1 className="details__heading">{details.title}</h1>
                           <p className="details__overview">
                              {details.overview}
                           </p>
                           <div className="details-genres">
                              {details.genres.map((genre) => (
                                 <div className="details__genre" key={genre.id}>
                                    <p>{genre.name}</p>
                                 </div>
                              ))}
                           </div>
                           <p className="details__votes">
                              {Math.floor(details.vote_average * 10)}
                           </p>
                        </div>
                     </div>
                  </div>
               )}

               <div className="details-cast-container container-padding">
                  <div className="cast-container">
                     <h1 className="movies__heading">Actors</h1>
                     <div className="cast">
                        {cast &&
                           cast.cast.map((cast) => (
                              <div key={cast.cast_id}>
                                 <img
                                    className="cast__profile"
                                    src={
                                       cast.profile_path
                                          ? `${imageApi}${cast.profile_path}`
                                          : noProfile
                                    }
                                    alt=""
                                 />
                                 <p className="cast__name">{cast.name}</p>
                                 <p className="cast__character">
                                    {cast.character}
                                 </p>
                              </div>
                           ))}
                     </div>
                  </div>
                  <div className="cast-container">
                     <h1 className="movies__heading">Directing</h1>
                     <div className="cast">
                        {cast &&
                           cast.crew
                              .filter(
                                 (details) => details.department == 'Directing'
                              )
                              .map((crew) => (
                                 <div key={crew.credit_id}>
                                    <img
                                       className="cast__profile"
                                       src={
                                          crew.profile_path
                                             ? `${imageApi}${crew.profile_path}`
                                             : noProfile
                                       }
                                    />
                                    <p className="cast__name">{crew.name}</p>
                                    <p className="cast__job">{crew.job}</p>
                                 </div>
                              ))}
                     </div>
                  </div>

                  <div className="cast-container">
                     <h1 className="movies__heading">Production</h1>
                     <div className="cast">
                        {cast &&
                           cast.crew
                              .filter(
                                 (details) => details.department == 'Production'
                              )
                              .map((crew) => (
                                 <div key={crew.credit_id}>
                                    <img
                                       className="cast__profile"
                                       src={
                                          crew.profile_path
                                             ? `${imageApi}${crew.profile_path}`
                                             : noProfile
                                       }
                                    />
                                    <p className="cast__name">{crew.name}</p>
                                    <p className="cast__job">{crew.job}</p>
                                 </div>
                              ))}
                     </div>
                  </div>

                  <div className="cast-container">
                     <h1 className="movies__heading">Writers</h1>
                     <div className="cast">
                        {cast &&
                           cast.crew
                              .filter(
                                 (details) => details.department == 'Writing'
                              )
                              .map((crew) => (
                                 <div key={crew.credit_id}>
                                    <img
                                       className="cast__profile"
                                       src={
                                          crew.profile_path
                                             ? `${imageApi}${crew.profile_path}`
                                             : noProfile
                                       }
                                    />
                                    <p className="cast__name">{crew.name}</p>
                                    <p className="cast__job">{crew.job}</p>
                                 </div>
                              ))}
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <NotFound />
         )}
      </>
   );
}

export default DetailsPage;
