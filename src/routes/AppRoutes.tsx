import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import App from "../App";


export default function AppRoutes() {
    return (
        <div>
            <h1>AppRoutes</h1>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}