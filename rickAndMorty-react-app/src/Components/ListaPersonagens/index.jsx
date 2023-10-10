import "./styles.css"
import { useState, useEffect, useContext, useRef } from "react"
import { PersonagemContext } from "../../Context/personagemContext"


const API = "https://rickandmortyapi.com/api/character"


function Home() {

    const [personagens, setPersonagens] = useState(null)

    const { personagem, setPersonagem } = useContext(PersonagemContext)

    const filtroRef = useRef(null)

    useEffect(() => {
        chamarApi()
    }, [])

    async function chamarApi() {

        const res = await fetch(API)

        const data = await res.json()

        setPersonagens(data.results)

    }

    function atualizarDetalhes(id) {
        setPersonagem({ id: id })
    }

    return (
        <section className="container-lista">
            <h2>Lista de Personagens</h2>
            <section>
                <input type="text" />
                <button>Pesquisar</button>
                <label>Estado</label>
                <select  ref={filtroRef} name="status" id="status">
                    <option value="vivo">Todos</option>
                    <option value="vivo">Vivo</option>
                    <option value="morto">Morto</option>
                    <option value="desconhecido">Desconhecido</option>
                </select>
            </section>
            {personagens !== null ?
                <ul>
                    {
                        personagens.map((personagem) => {
                            return (
                                <li onClick={() => atualizarDetalhes(personagem.id)} className="lista-item" key={personagem.id}>
                                    <img className="personagem-foto" src={personagem.image} />
                                    <p className="personagem-nome">{personagem.name}</p>
                                </li>
                            )
                        })
                    }
                </ul> : null
            }
        </section>
    )
}

export default Home