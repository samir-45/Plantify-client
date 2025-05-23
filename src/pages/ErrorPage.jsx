import React from 'react';
import page from '../assets/errorPage.jpg'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
                        <div className='relative'>
            <img className='object-cover w-full max-h-screen' src={page} alt="" />
                        <Link to='/' className='btn absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 btn-soft btn-warning'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;