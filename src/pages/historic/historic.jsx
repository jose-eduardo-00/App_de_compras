import { SideMenu } from "../../components/sideMenu/sideMenu"
import { ToDoList } from "../../components/toDoList/toDoList"
import './historic.scss'

// criar a todolist do historico, criar passando o tipo como props, por exemplo <ToDoList page={historico} />

const Historic = () => {
    return (
        <main className="historic">
            <SideMenu />
            <ToDoList page={"historic"} />
        </main>
    )
}

export { Historic }