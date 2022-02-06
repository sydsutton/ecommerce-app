import React, {useState, useEffect} from "react"
import {auth} from "./firebase"

const Context = React.createContext('default')

const ContextProvider = (props) => {
    const [savedItems, setSavedItems] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [currentUser, setCurrentUser] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        let isMounted = true

        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return isMounted = false
    }, [])

    const saveItem = (item) => {
        setSavedItems([...savedItems, item])
    }

    const removeItem = (item) => {
        setSavedItems([...savedItems.filter(prevItems => prevItems !== item)])
    }

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const logIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const reset = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const signOut = () => {
        setIsLoggedIn(false)
        return auth.signOut()
    }
    console.log(savedItems)
    return (
        <Context.Provider 
            value={{
                isLoggedIn,
                setIsLoggedIn,
                saveItem,
                savedItems,
                removeItem, 
                signUp,
                logIn,
                reset,
                signOut,
                currentUser,
                isModalOpen,
                setIsModalOpen
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}