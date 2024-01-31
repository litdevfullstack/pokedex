import { useState } from "react"
import axios from "axios"

const useFetch = (url, urlType) => {

    const [infoApi, setInfoApi] = useState()

    const getApi = (url) => {
        axios.get(url)
            .then((res) => {
                setInfoApi(res.data)
            })
            .catch((err) => {
                console.log(err)
            })


    }

    const getTypePokemon = (urlType) => {
        axios.get(urlType)
            .then((res) => {
                const obj = {
                    results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
                }
                setInfoApi(obj)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return [infoApi, getApi, getTypePokemon]
}

export default useFetch