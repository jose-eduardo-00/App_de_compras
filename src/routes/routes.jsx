import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../components/pages/home/home"
import { Historic } from "../components/pages/historic/historic"
import { CreateList } from "../components/pages/createList/createList"
import { DeleteList } from "../components/pages/deleteList/deleteList"
import { List } from "../components/pages/list/list"


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/historic" element={<Historic />} />
                <Route path="/createlist" element={<CreateList />} />
                <Route path="/deletelist" element={<DeleteList />} />
                <Route path="/list/:id" element={<List />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }