import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./contexts/auth"


function App() {


  return (
    <>
      <AuthProvider>
        <BrowserRouter>
     
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
