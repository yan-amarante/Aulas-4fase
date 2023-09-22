import './styles.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {

    chamarApi();

  }, []);

  async function chamarApi() {

    let pokemonObjetos = []

    for (let i = 1; i < 11; i++) {

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)

      const data = await res.json()

      pokemonObjetos.push(data)

    }
    
    setPokemon(pokemonObjetos)

  }

  return (

    <main className='container'>
      <section className='pokemon-info'>
        <FlatList lista={pokemon}/>
      </section>
    </main>

  )
}

function FlatList ({lista}){

  return(
  <ul className='lista'>
  {lista.map((lista) => {
    return <li className='lista-item' key={lista.id}>
      <Link className='link' to={`pokemonInfo/${lista.id}`}>
        <img
          className='foto-pokemon'
          src={lista?.sprites.other["official-artwork"].front_default}
        />
        <h2>{lista?.name}</h2>
      </Link>
    </li>
  })}
</ul>
  )

}

export default Home
