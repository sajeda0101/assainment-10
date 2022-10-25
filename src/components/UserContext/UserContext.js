import React, { createContext, Profiler, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, FacebookAuthProvider, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";

export const AuthContext=createContext();
const auth=getAuth(app)
const UserContext = ( {children}) => {
const [user,setUser]=useState('');
const googleProvider=new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// create user
const signup=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
// update user name
const updateUserProfile=(name,photoURL)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photoURL
    })
}

// signIngoogle
const signIngoogle=()=>{
    return signInWithPopup(auth,googleProvider)

}

// signingithub
const signinGithub=()=>{
    return signInWithPopup(auth,githubProvider)
}


// logout
const logOut=()=>{
   return signOut(auth)
}

// login
const signin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

// reset password
const resetpass=(email)=>{
    return sendPasswordResetEmail(auth,email)
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
    })
    return unsubscribe;
},[])


    const authInfo={user,updateUserProfile,signin,resetpass,logOut,signinGithub,signup,signIngoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;