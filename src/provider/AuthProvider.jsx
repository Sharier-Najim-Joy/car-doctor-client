
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userUpdateProfile = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            // photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser);
            setLoading(false)

            // if user exists then issue a token
            if (currentUser) {
                axios.post('https://car-doctor-server-nine-lac.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else{
                axios.post('https://car-doctor-server-nine-lac.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        userUpdateProfile,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;