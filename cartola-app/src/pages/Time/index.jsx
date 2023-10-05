import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Time() {

    const [jogadores, setJogadores] = useState(null)

    const id = useParams()

    function jogadoresTratativa(objeto) {

        let jogadores = []

        Object.keys(objeto).forEach(function (key, index) {
            jogadores.push(objeto[key])
        });

        for (let i = 0; i < 3; i++) {
            jogadores.shift()
        }
        let fotoTratativa = jogadores[0].map((jogador) => {
            jogador.foto.replace(" FORMATO ", "220x220")
        })
        console.log(fotoTratativa, "1")
        setJogadores(fotoTratativa)
    }


    useEffect(() => {
        chamarApi()
    }, [])

    async function chamarApi() {

        let jogadores = {};
        const res = await fetch(`https://api.cartola.globo.com/atletas/mercado/${id.id}`)
        const data = await res.json()

        jogadores = data

        jogadoresTratativa(jogadores)
    }
    return (
        <main onClick={() => console.log(jogadores)}
        >
            <ul>
                {jogadores !== null ?
                    jogadores.map((jogador) => {
                        return <li key={jogador.atleta_id}>
                            <img src={jogador.foto} />
                            <h2>{jogador.apelido}</h2>
                        </li>
                    })
                    :
                    null
                }
            </ul>
        </main>
    )
}

export default Time