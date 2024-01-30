import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/home"
import { Historic } from "../pages/historic/historic"
import { List } from "../pages/list/list"


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/historic" element={<Historic />} />
                <Route path="/list/:id" element={<List />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }