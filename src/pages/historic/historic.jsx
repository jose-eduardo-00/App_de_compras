import { SideMenu } from "../../components/sideMenu/sideMenu"
import { ToDoList } from "../../components/toDoList/toDoList"
import './historic.scss'


const Historic = () => {

    const historicSelect = {
        historicMenu: { borderColor: "#eeeeee" }
    }

    return (
        <main className="historic">
            <SideMenu color={historicSelect} />
            <ToDoList page={"historic"} />
        </main>
    )
}

export { Historic }