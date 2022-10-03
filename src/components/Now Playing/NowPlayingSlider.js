import React from 'react';

import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

import NowPlayingSlide from './NowPlayingSlide';

function NowPlayingSlider({ data }) {
   return (
      <div className="slider-wrapper">
         {data && (
            <div className="slider">
               <h1 className="slider__heading">Now Playing</h1>
               <Swiper
                  modules={[Navigation, Pagination, Scrollbar]}
                  navigation={{
                     prevEl: '.prev',
                     nextEl: '.next',
                  }}
                  pagination={{ clickable: true }}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
               >
                  {data.map((movie, index) => {
                     return (
                        <SwiperSlide key={index}>
                           <NowPlayingSlide
                              backdrop={movie.backdrop_path}
                              title={movie.title}
                              date={movie.release_date}
                              id={movie.id}
                              vote={movie.vote_average}
                              desc={movie.overview}
                           />
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
               <div className="slider__navigation">
                  <div className="prev-slide">
                     <BsChevronLeft size={40} color="fff" />
                  </div>
                  <div className="next-slide">
                     <BsChevronRight size={40} color="fff" />
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default NowPlayingSlider;
