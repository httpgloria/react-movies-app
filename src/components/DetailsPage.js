import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailsPage() {
   const [details, setDetails] = useState();
   const [cast, setCast] = useState();
   let { id } = useParams();

   const imageApi = 'https://image.tmdb.org/t/p/w200';
   const backdropApi = 'https://image.tmdb.org/t/p/w1280';
   const posterApi = 'https://image.tmdb.org/t/p/w500';

   useEffect(() => {
      async function fetchDetails() {
         const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
         );

         const movieDetails = await response.json();
         setDetails(movieDetails);
         console.log(movieDetails);
      }

      async function fetchCast() {
         const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
         );

         const castDetails = await response.json();
         setCast(castDetails);
         console.log(castDetails);
      }

      fetchDetails();
      fetchCast();
   }, []);

   return (
      <div className="details">
         {details && (
            <div>
               {' '}
               <div className="overlay details-backdrop-wrapper">
                  <img
                     className="details__backdrop"
                     src={`${backdropApi}${details.backdrop_path}`}
                     alt={details.title}
                  />
               </div>
               <img
                  className=""
                  src={`${posterApi}${details.poster_path}`}
                  alt=""
               />
               <h1>{details.title}</h1>
               <p>{details.overview}</p>
               {details.genres.map((genre) => (
                  <div key={genre.id}>
                     <p>{genre.name}</p>
                  </div>
               ))}
            </div>
         )}
         {cast &&
            cast.cast.map((cast) => (
               <div key={cast.cast_id}>
                  <img src={`${imageApi}${cast.profile_path}`} alt="" />
                  <p>{cast.known_for_department}</p>
                  <p>{cast.character}</p>
                  <p>{cast.name}</p>
               </div>
            ))}
         {cast &&
            cast.crew
               .filter((details) => details.department == 'Directing')
               .map((crew) => (
                  <div key={crew.credit_id}>
                     <h3>Crew</h3>
                     <img src={`${imageApi}${crew.profile_path}`} />
                     <p>{crew.job}</p>
                     <p>{crew.name}</p>
                  </div>
               ))}
         {cast &&
            cast.crew
               .filter((details) => details.department == 'Production')
               .map((crew) => (
                  <div key={crew.credit_id}>
                     <img src={`${imageApi}${crew.profile_path}`} />
                     <p>{crew.job}</p>
                     <p>{crew.name}</p>
                  </div>
               ))}
         {cast &&
            cast.crew
               .filter((details) => details.department == 'Writing')
               .map((crew) => (
                  <div key={crew.credit_id}>
                     <img src={`${imageApi}${crew.profile_path}`} />
                     <p>{crew.job}</p>
                     <p>{crew.name}</p>
                  </div>
               ))}
      </div>
   );
}

export default DetailsPage;
