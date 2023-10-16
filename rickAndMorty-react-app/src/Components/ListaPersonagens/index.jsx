import "./styles.css"
import { useState, useEffect, useContext, useRef } from "react"
import { PersonagemContext } from "../../Context/personagemContext"


const API = "https://rickandmortyapi.com/api/character"

const API_BUSCA = "https://rickandmortyapi.com/api/character/?name="


function ListaPersonagens() {

    const [personagens, setPersonagens] = useState(null)

    const [personagensFiltro, setPersonagensFiltro] = useState([])

    const [pesquisa, setPesquisa] = useState(null)

    const { personagem, setPersonagem } = useContext(PersonagemContext)

    const filtroRef = useRef(null)

    useEffect(() => {
        chamarApi()
    }, [])

    async function chamarApi() {

        const res = await fetch(API)

        const data = await res.json()

        setPersonagens(data.results)
        setPersonagensFiltro(data.results)

    }

    function atualizarDetalhes(id) {
        setPersonagem({ id: id })
    }

    function filtrarLista() {
        if (filtroRef.current.selectedIndex === 0) {
            let teste = personagens.map((personagem) => {
                return (
                    {
                        id: personagem.id,
                        image: personagem.image,
                        name: personagem.name
                    }
                )

            })
            setPersonagensFiltro(teste)
        }
        if (filtroRef.current.selectedIndex === 1) {
            let teste = personagens.map((personagem) => {
                if (personagem.status === 'Alive') {
                    return (
                        {
                            id: personagem.id,
                            image: personagem.image,
                            name: personagem.name
                        }
                    )
                }
            })
            setPersonagensFiltro(teste)
        }
        if (filtroRef.current.selectedIndex === 2) {
            let teste = personagens.map((personagem) => {
                if (personagem.status === 'Dead') {
                    return (
                        {
                            id: personagem.id,
                            image: personagem.image,
                            name: personagem.name
                        }
                    )
                }
            })
            setPersonagensFiltro(teste)
        }
        if (filtroRef.current.selectedIndex === 3) {
            let teste = personagens.map((personagem) => {
                if (personagem.status === 'unknown') {
                    return (
                        {
                            id: personagem.id,
                            image: personagem.image,
                            name: personagem.name
                        }
                    )
                }
            })
            setPersonagensFiltro(teste)
        }
    }

    async function buscarNome() {
        const res = await fetch(API_BUSCA + pesquisa)
        const data = await res.json()
        setPersonagensFiltro(data.results)
    }

    return (
        <section className="container-lista">
            <h2 className="titulo-lista">Lista de Personagens</h2>
            <section className="pesquisa-filtro-container">
                <section className="pesquisa-container">
                    <input className="pesquisa-input" onChange={evento => setPesquisa(evento.target.value)} type="text" />
                    <button className="pesquisa-botao" onClick={buscarNome}>Pesquisar</button>
                </section>
                <select onChange={filtrarLista} ref={filtroRef} name="status" id="status">
                    <option value="vivo">Todos</option>
                    <option value="vivo">Vivo</option>
                    <option value="morto">Morto</option>
                    <option value="desconhecido">Desconhecido</option>
                </select>
            </section>
            {personagens !== null ?
                <ul className="lista">
                    {
                        personagensFiltro.map((personagem) => {
                            if (personagem !== undefined) {
                                return (
                                    <li onClick={() => atualizarDetalhes(personagem.id)} className="lista-item" key={personagem.id}>
                                        <img className="personagem-foto" src={personagem.image} />
                                        <p className="personagem-nome">{personagem.name}</p>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                : null}
        </section>
    )
}

export default ListaPersonagens