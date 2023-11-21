import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("current user", currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        // setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const login = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const logout = () => {
        // setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {loading ? <div className="grid place-items-center h-screen"><span className="loading loading-bars text-warning loading-lg"></span></div> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;