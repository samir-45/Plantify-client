import React from 'react';
import PaginationSwiper from '../Components/PaginationSwiper';
import Services from '../Components/Services';

const Home = () => {
    return (
        <div className='w-full'>
            <div className='px-3'>
                <PaginationSwiper></PaginationSwiper>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;