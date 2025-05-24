import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div>
<header>
<NavBar></NavBar>
</header>
<main>
<Outlet></Outlet>
</main>
<footer>
<Footer></Footer>
</footer>

        </div>
    );
};

export default AuthLayout;