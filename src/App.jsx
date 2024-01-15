import { SideMenu } from "./components/sideMenu/sideMenu"
import { ToDoList } from "./components/toDoList/toDoList"
import './app.scss'


function App() {
    return (
        <main className="app">
            <SideMenu />
            <ToDoList />    
        </main>
    )
}

export default App
