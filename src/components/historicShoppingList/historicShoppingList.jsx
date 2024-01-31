import { Link } from "react-router-dom"
import { getHistoric } from "../../services/services"
import { setMounthName } from "../shoppingList/utils"
import './historicShoppingList.scss'


const historicList = await getHistoric()

const HistoricShoppingList = () => {
    return (
        historicList.map((e, index) => {
            const listDate = new Date(e.creation_date)
            const mes = setMounthName(listDate)
            const date = listDate.toLocaleDateString('pt-BR', { timeZone: 'UTC', });
            return (
                <section key={index} className="shopping-list">
                    <Link to={`/historic/${e.id}`} className='link'>
                        <div className='infos'>
                            <h1>Compras de {mes}</h1>
                            <p>Data de criação: {date}</p>
                        </div>
                    </Link>
                </section>
            )
        })
    )
}

export { HistoricShoppingList }