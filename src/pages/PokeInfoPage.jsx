import { useParams } from "react-router"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import '../components/PokeInfoPage/PokeInfoPage.css'
import PokemonHeader from "../components/PokedexHeader/PokedexHeader"
import PokedexHeader from "../components/PokedexHeader/PokedexHeader"
const PokeInfoPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemon] = useFetch()

  useEffect(() => {
    getPokemon(url)
  }, [])

  console.log(pokemon);

  return (
    <>
    <PokedexHeader/>
      <div className="pokeinfo__container">
        <article className="pokeinfo__article" >
          <div className={`div__img ${pokemon?.types[0].type.name}`}>
            <img className="pokeinfo__img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
          </div>
          <header className="pokeinfo__header">
            <h3 className="pokeinfo__order" >#{pokemon?.order}</h3>
            <h2 className="pokeinfo__name doble-linea">{pokemon?.name}</h2>
            <h4 className="pokeinfo__height">Height - {pokemon?.height}</h4>
            <h4 className="pokeinfo__weight">Weight - {pokemon?.weight}</h4>
            <h3 className="pokeinfo__type">Type</h3>
            <ul className="pokeinfo__type__ul" >
              {
                pokemon?.types.map(infoType => (
                  <li className='pokeinfo__type__value' key={infoType.type.url}>{infoType.type.name}</li>
                ))
              }
            </ul>
            <h3 className="pokeinfo__abilities">Abilities</h3>
            <ul className="pokeinfo__abilities__ul">
              {
                pokemon?.abilities.map(infoAbi => (
                  <li className="pokeinfo__abilities__value ${pokemon?.types[0].type.name}" key={infoAbi.ability.url}>{infoAbi.ability.name}</li>
                ))
              }
            </ul>
            <h4 className="pokeinfo__stats" >Stats</h4>
            <ul className="pokeinfo__stats__ul" >
              <li className="pokeinfo__stats__value" >❤️<span className="span__stats" >{pokemon?.stats[0].stat.name}</span> {pokemon?.stats[0].base_stat}</li>
              <li className="pokeinfo__stats__value">🗡️<span className="span__stats" >{pokemon?.stats[1].stat.name}</span> {pokemon?.stats[1].base_stat}</li>
              <li className="pokeinfo__stats__value">🛡️<span className="span__stats" >{pokemon?.stats[2].stat.name}</span> {pokemon?.stats[2].base_stat}</li>
              <li className="pokeinfo__stats__value">⚡<span className="span__stats" >{pokemon?.stats[5].stat.name}</span> {pokemon?.stats[5].base_stat}</li>
            </ul>
          </header>
          <section className="pokeinfo__section" >
            <h2 className="pokeinfo__movements">Movements</h2>
            <ul className="pokeinfo__movements__ul">
              {
                pokemon?.moves.map(infoMove => (
                  <li className="pokeinfo__movements__value" key={infoMove.move.url}>{infoMove.move.name}</li>
                ))
              }
            </ul>
          </section>
        </article>
      </div>

    </>
  )
}

export default PokeInfoPage
