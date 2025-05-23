import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const PaginationSwiper = () => {
    return (
       <div>
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      slidesPerView={1}
      className='rounded-2xl'
    >
      <SwiperSlide>
        <img
          src="https://i.ibb.co/B2bXcXht/clearoff-3.jpg"
          alt="Music Festival"
          className="w-full h-[500px] object-top object-cover "
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/v6p14xS3/clearoff-2.jpg"
          alt="Holiday Event"
          className="w-full h-[500px] object-top object-cover "
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/W4J7w3jj/clearoff-1.jpg"
          alt="Business Summit"
          className="w-full h-[500px] object-top object-cover "
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/7tDStxw7/clearoff.jpg"
          alt="Business Summit"
          className="w-full h-[500px] object-top object-cover "
        />
      </SwiperSlide>
    </Swiper>
        </div>
    );
};

export default PaginationSwiper;