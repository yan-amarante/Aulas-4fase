import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css"

function Time() {

    const [jogadores, setJogadores] = useState(null)
    const [nomeTime, setNomeTime] = useState(null)

    const id = useParams()

    function jogadoresTratativa(objeto) {

        let jogadores = []

        Object.keys(objeto).forEach(function (key, index) {
            jogadores.push(objeto[key])
        });

        for (let i = 0; i < 3; i++) {
            jogadores.shift()
        }
        jogadores = jogadores[0]

        let fotoTratativa = jogadores.map((jogador) => {
            if (jogador.foto === null || jogador.foto === "") {
                jogador.foto = "https://s.sde.globo.com/media/person_role/2022/09/27/photo_220x220_1oFhhWx.png"
            }
            return { ...jogador, foto: jogador.foto.replace("FORMATO", "220x220") }
        })
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

        setNomeTime(data.clubes[id.id].nome)

        if (jogadores.atletas !== null) {
            jogadoresTratativa(jogadores)
        }
    }
    return (
        <main className="time-container">
            {nomeTime !== null ? <h1 className="titulo-nome-time">Jogadores do {nomeTime}</h1> : null}
            <ul>
                {jogadores !== null ?
                    jogadores.map((jogador) => {
                        return <li key={jogador.atleta_id}>
                            <img className="foto-jogador" src={jogador.foto} />
                            <h2>{jogador.apelido}</h2>
                        </li>
                    })
                    :
                    <h2>Esse time não possui atletas cadastrados</h2>
                }
            </ul>
        </main>
    )
}

export default Time