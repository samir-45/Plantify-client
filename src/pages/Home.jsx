import React from 'react';
import PaginationSwiper from '../Components/PaginationSwiper';
import Services from '../Components/Services';
import NewPlants from '../Components/NewPlants';
import Faq from '../Components/Faq';
import Newsletter from '../Components/Newsletter';
import Subscription from '../Components/Subscription';

const Home = () => {
    return (
        <div className='w-full'>
            <div className='px-3'>
                <PaginationSwiper></PaginationSwiper>
            </div>
            <div>
                <Services></Services>
            </div>
            <div>
                <NewPlants></NewPlants>
            </div>
            <div>
                <Newsletter></Newsletter>
            </div>
            <div>
                <Subscription></Subscription>
            </div>
            <div>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;