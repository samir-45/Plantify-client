import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    const provider = new GoogleAuthProvider();

    //   Google sign in

    const GoogleSignIn = () => {
        return signInWithPopup(auth, provider)

    }


    const [loading, setLoading] = useState(true)
    // Create a new user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // Update Profile data
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // LogIN
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logout
    const logOut = () => {
        return signOut(auth)
    }

    // Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        createUser,
        user,
        setUser,
        updateUser,
        logOut,
        signIn,
        loading,
        setLoading,
        GoogleSignIn,

    }
    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;