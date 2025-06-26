import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer'

const MainLayout = () => {
    return (
        <div>
            <header className='px-3 py-3 sticky top-0 z-50 '>
                <NavBar></NavBar>
                <div className="Hero"></div>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className='mt-20'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;