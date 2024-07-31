import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: null,
    signIn: () => { },
    signOut: () => { }
})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    function signIn() {
        setUser({
            id: Date.now(),
            username: 'string',
            password: 'string'
        })
    }

    function signOut() {
        setUser(null)
    }

    return <AuthContext.Provider value={{user, signOut, signIn }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const contexto = useContext(AuthContext)
    return contexto
}