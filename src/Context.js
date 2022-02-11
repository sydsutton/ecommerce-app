import React, {useState, useEffect} from "react"
import { useLocalStorage } from "./components/useLocalStorage"
import { auth } from "./firebase"

const Context = React.createContext()

const ContextProvider = (props) => {
    const [savedItems, setSavedItems] = useLocalStorage("savedItems", [])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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
                .then(() => setIsLoggedIn(true))
    }

    const reset = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const signOut = () => {
        setIsLoggedIn(false)
        return auth.signOut()
    }

    return (
        <Context.Provider 
            value={{
                isLoggedIn,
                setIsLoggedIn,
                saveItem,
                savedItems,
                setSavedItems,
                removeItem, 
                signUp,
                logIn,
                reset,
                signOut,
                currentUser,
                isModalOpen,
                setIsModalOpen,
                isDrawerOpen,
                setIsDrawerOpen
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}