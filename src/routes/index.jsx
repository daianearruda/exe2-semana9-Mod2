import { Route, Routes } from "react-router-dom";
import LoginPage from '../pages/login/index.jsx';
import { TemplatePrivateRoute } from "../templates/private.jsx";
import { HomePage } from "../pages/home/index.jsx";
import { CadastroPage } from "../pages/cadastro/index.jsx";


export function AppRoutes() {
    return (
        <Routes>
          
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />

            <Route path="/home" element={<TemplatePrivateRoute />} >
            <Route path="/home" element={<HomePage />}/>
            </Route>
           
        </Routes>
    )
} 

