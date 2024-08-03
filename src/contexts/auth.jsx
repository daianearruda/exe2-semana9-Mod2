// auth.js
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: null,
    signIn: () => { },
    signOut: () => { },
    fakeApiSignUp: () => { }  // Certifique-se de incluir isso no contexto
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function signIn(userData) {
        setUser(userData);
    }

    function signOut() {
        setUser(null);
    }

   // auth.js
function fakeApiSignUp({ username, email, firstName, lastName, gender, image, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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


    return (
        <AuthContext.Provider value={{ user, signOut, signIn, fakeApiSignUp }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const contexto = useContext(AuthContext);
    return contexto;
}
