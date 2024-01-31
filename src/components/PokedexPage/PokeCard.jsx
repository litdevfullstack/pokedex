import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router"
import './styles/PokeCard.css'


const PokeCard = ({ url }) => {

    const [ infoPoke, getInfoPoke ] = useFetch()
    useEffect(() => {
      getInfoPoke(url)
    }, [])

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/pokedex/${infoPoke?.id}`)
    }

  return (
    <section className={`pokecard ${infoPoke?.types[0].type.name}`} onClick={handleNavigate}>
        <header className="pokecard__header" >
            <img
            className="pokecard__img"
            src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <section className="pokecard__body" >
            <h3 className="pokecard__name" >{infoPoke?.name}</h3>
            <ul className="pokecard__types" >
                {
                    infoPoke?.types.map(infoType => (
                        <li className="pokecard__types__item" key={infoType.type.url}>{infoType.type.name}</li>
                    ))
                }
            </ul>
            <hr className="pokecard__hr" />
            <ul className="pokecard__stats" >
                {
                    infoPoke?.stats.map(infoStat => (
                        <li className="pokecard__stats__item" key={infoStat.stat.url}>    
                            <span className="pokecard__stats__label" >{infoStat.stat.name}</span>
                            <span className="pokecard__stats__value" >{infoStat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </section>

  )
}

export default PokeCard