import { Routes, Route } from "react-router-dom";
import Login from "../features/auth/Login";
import Dashboard from "../features/dashboard/Dashboard";

function AppRoutes(){
    return (
        <Routes>
            <Route path = "/login" element = {<Login/>} />
            <Route path = "/dashboard" element = {<Dashboard/>} />
        </Routes>
    );
}

export default AppRoutes;