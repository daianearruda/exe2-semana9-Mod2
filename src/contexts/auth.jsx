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
            username: '',
            email: '',
            age:''
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


export function fakeApiSignIn({ username, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'user' && password === 'password') {
          resolve({
            userId: '12345',
            username: 'user',
            email: 'user@example.com',
            fisrtName: 'User Name',
            lastName: 'User Name',
            gender:'',
            image:'',
            token: 'fake-jwt-token',
          });
        } else {
          reject('Credenciais inválidas');
        }
      }, 1000);
    });
  }