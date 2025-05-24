import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default LoadingSpinner;