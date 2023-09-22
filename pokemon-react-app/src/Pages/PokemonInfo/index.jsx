import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./styles.css"


function PokemonInfo() {

    const [pokemon, setPokemon] = useState(null);

    const { id } = useParams()


    useEffect(() => {

        chamarApi();

    }, []);

    async function chamarApi() {

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const data = await res.json();

        setPokemon(data)

    }

    return (
        <main>
            <img
                className='foto-pokemon-info'
                src={pokemon?.sprites.other["official-artwork"].front_default}
            />
            <h2>{pokemon?.name}</h2>
        </main>
    )
}

export default PokemonInfo