import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import LoadingSpinner from '../Components/LoadingSpinner';

const PrivetRoute = ({children}) => {

        const location = useLocation()

    const {user, loading} = use(AuthContext)

        if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }


    if(user){
    return children
    }
    return <Navigate state={location.pathname} to='/auth/signIn'></Navigate>
};

export default PrivetRoute;