import "./styles.css"
import { useEffect, useState, useContext } from "react"
import { PersonagemContext } from "../../Context/personagemContext"

const API_DETALHES = "https://rickandmortyapi.com/api/character/"
const API_EPISODIOS = "https://rickandmortyapi.com/api/episode/"

function DetalhesPersonagem({ id }) {

    const [detalhes, setDetalhes] = useState(null)

    const [episodios, setEpisodios] = useState(null)

    const { personagem, setPersonagem } = useContext(PersonagemContext)

    useEffect(() => {

        buscarDetalhes(id)

    }, [personagem])

    async function buscarDetalhes(id) {
        if (id !== undefined) {
            const res = await fetch(API_DETALHES + id)
            const data = await res.json()

            setDetalhes(data)

            let episodios = []

            episodios = data.episode.map((episodio) => {
                console.log()
                if (episodio.slice(-2).includes("/")) {
                    return episodio.slice(-1)
                } else {
                    return episodio.slice(-2)
                }

            })

            buscarEpisodios(episodios)
        }
    }
    async function buscarEpisodios(episodios) {
        const res = await fetch(API_EPISODIOS + episodios)
        const data = await res.json()
        setEpisodios(data)
    }

    function validarTipoEpisodios() {
        if (Array.isArray(episodios)) {
            return renderizarVetor()
        } else {
            return renderizarObjeto()
        }
    }

    function renderizarVetor() {
        return (
            <ul className="episodios-container">
                {
                    episodios.map((episodio) => {
                        return (
                            <li className="lista-itens-detalhes" key={episodio.id}>
                                <p className="info-detalhes">Número: {episodio.episode}</p>
                                <p className="info-detalhes">Título: {episodio.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    function renderizarObjeto() {
        return (
            <section className="episodios-container borda-section">
                <p className="info-detalhes">Número: {episodios.episode}</p>
                <p className="info-detalhes">Título: {episodios.name}</p>
            </section>
        )
    }

    return (
        <section className="container-detalhes">
            <h2 className="titulo-detalhes">Detalhes do Personagem</h2>
            <img className="imagem-detalhes" src={detalhes?.image} />
            <p className="info-detalhes">Nome: {detalhes?.name}</p>
            <p className="info-detalhes">Status: {detalhes?.status}</p>
            <p className="info-detalhes">Espécie: {detalhes?.species}</p>
            <h3 className="h3-episodios">Episódios:</h3>
            {episodios !== null ? validarTipoEpisodios() : null}
        </section>
    )
}

export default DetalhesPersonagem