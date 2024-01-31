import { useRef } from "react"
import { useDispatch } from "react-redux"
import { setTrainerName } from "../store/slices/trainerName.slice"
import { useNavigate } from "react-router"
import '../components/HomePage/HomePage.css'
import PokedexBanner from "../components/HomePage/PokedexBanner"
const HomePage = () => {

const inputName = useRef()

const dispatch = useDispatch()

const navigate = useNavigate()

const handleSubmit = e => {
  e.preventDefault()
  dispatch(setTrainerName(inputName.current.value.trim()))
  navigate('/pokedex')
}

  return (
    <>
    <div className="home__div">
      <img className="home__img" src="/image 12.png" alt="" />
      <h2 className="home__h2" >Hi Trainer</h2>
      <p className="home__p" >To start, please give me you trainer name</p>
      <form className="input__container" onSubmit={handleSubmit}>
        <input className="home__input" ref={inputName} type="text"/>
        <button className="home__button">Catch them all</button>
      </form>
    </div>
    <PokedexBanner/>
    </>
  )
}

export default HomePage