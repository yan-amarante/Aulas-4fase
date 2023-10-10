import './App.css'
import ListaPersonagens from "./Components/ListaPersonagens/index"
import DetalhesPersonagem from './Components/DetalhesPersonagem'
import { useContext } from 'react'
import { PersonagemContext } from "./Context/personagemContext"

function App() {

  const { personagem, setPersonagem } = useContext(PersonagemContext)
  return (
    <section className='container'>
      <h1 className='titulo-app'>Rick and Morty App</h1>
      <ListaPersonagens />
      <DetalhesPersonagem id={personagem?.id} />
    </section>
  )
}

export default App
