import { useSelector } from "react-redux"
import store from "../store"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import { useState } from "react"
import SelectType from "../components/PokedexPage/SelectType"
import '../components/PokedexPage/styles/PokedexPage.css'
import PokedexHeader from "../components/PokedexHeader/PokedexHeader"

const PokedexPage = () => {

  const [typeSelected, setTypeSelected] = useState('allPokemons')
  const [inputValue, setInputValue] = useState('')

  const user = useSelector(store => store.trainerName)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

  const [pokemon, getPokemon, getType] = useFetch()

  useEffect(() => {
    if(typeSelected === 'allPokemons') {
      getPokemon(url)
      } else {
        getType(typeSelected)
      }
  }, [typeSelected])
  
  const inputName = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputName.current.value.trim().toLowerCase())
  }

  const cbFilter = (poke) => poke.name.toLowerCase().includes(inputValue)

  return (
    <>
    <PokedexHeader/>
    <div className="pokedexpage__container">
      <p className="pokedexpage__p">Welcome <span className="user__span">{user}</span>, here you find your favorite pokemon. Let's go!</p>
     <div className="pokedexpage__input-container">
      <form onSubmit={handleSearch}>
        <input className="pokedexpage__input" ref={inputName} type="text" />
        <button className="pokedexpage__button">Search</button>
      </form>
      <SelectType  setTypeSelect={setTypeSelected}/>
     </div>
      <div className="pokemons">
        {
          pokemon?.results.filter(cbFilter).map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
    </div>
    </>
  )
}

export default PokedexPage