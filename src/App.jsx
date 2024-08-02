import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./contexts/auth"
import { AppRoutes } from "./routes"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <>
      <AuthProvider>
        <BrowserRouter>
         <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
