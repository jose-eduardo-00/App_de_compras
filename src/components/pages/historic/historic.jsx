import { SideMenu } from "../../sideMenu/sideMenu"
import { ToDoList } from "../../toDoList/toDoList"
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