import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const [pokemon, setPokemon] = useState(null);

  const [contador, setContador] = useState(1);


  useEffect(() => {

    chamarApi();

  }, [contador]);

  async function chamarApi() {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${contador}`);

    const data = await res.json();

    setPokemon(data);

  }

  function somarContador() {

    setContador(contador + 1);

  }

  return (

    <main className='container'>
      <button className='botao' onClick={somarContador}>Proximo</button>
      <section className='pokemon-info'>
        <img
          className='foto-pokemon' alt="pokemon"
          src={pokemon?.sprites.other["official-artwork"].front_default}
        />
        <h1>{pokemon?.name}</h1>
      </section>
    </main>

  )
}

export default App
