import { SideMenu } from "../../components/sideMenu/sideMenu"
import { ToDoList } from "../../components/toDoList/toDoList"
import './historic.scss'


const Historic = () => {
    return (
        <main className="historic">
            <SideMenu />
            <ToDoList />
        </main>
    )
}

export { Historic }