import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/home"
import { Historic } from "../pages/historic/historic"
import { List } from "../pages/list/list"


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/App_de_compras" element={<Home />} />
                <Route path="/historic" element={<Historic />} />
                <Route path="/list/:id" element={<List />} />
                <Route path="/:historic/:id" element={<List />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }