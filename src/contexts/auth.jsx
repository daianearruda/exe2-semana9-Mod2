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


// Atualize a função fakeApiSignUp para refletir os parâmetros do formulário
export function fakeApiSignUp({ username, email, firstName, lastName, gender, image, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simule uma validação básica
      if (username && email && firstName && lastName && gender && image && password) {
        resolve({
          userId: '12345',
          firstName,
          lastName,
          email,
          gender,
          image,
          token: 'fake-jwt-token',
        });
      } else {
        reject('Todos os campos são obrigatórios');
      }
    }, 1000);
  });
}

