import { createContext, useEffect, useState } from "react"
import { auth } from "./firebase"

export const AuthContext = createContext({
    currentUser: null,
    loading: true,
})

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('loading')
        setLoading(true)
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
            console.log('loaded')
        })
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
