import { useParams } from "react-router-dom";


const List = () => {
    const id = useParams()
    return (
        <h1>Lista {id.id}</h1>
    )
}

export { List }