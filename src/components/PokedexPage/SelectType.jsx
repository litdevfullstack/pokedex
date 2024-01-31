import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/SelectType.css'
const SelectType = ({ setTypeSelect }) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [types, getTypes] = useFetch()

    useEffect(() => {
        getTypes(url)
    }, [])

    const handleCnange = () => {
        setTypeSelect(typeRef.current.value)
    }

    const typeRef = useRef()

    return (
        <select className="pokedexpage__types" ref={typeRef} onChange={handleCnange}>
            <option value='allPokemons' >All Pokemons</option>
            {
                types?.results.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }

        </select>
    )
}

export default SelectType