import "./styles.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Home() {

    const [times, setTimes] = useState([])

    function timesTratativa(objeto) {

        let times = []

        Object.keys(objeto).forEach(function (key, index) {
            times.push(objeto[key])
        });

        setTimes(times)
    }


    useEffect(() => {
        chamarApi()
    }, [])

    async function chamarApi() {

        let times = {};
        const res = await fetch("https://api.cartola.globo.com/clubes")
        const data = await res.json()

        times = data

        timesTratativa(times)

    }

    return (
        <main className="container-home">
            <ul>
                {times.length > 0 ?
                    times.map((time) => {
                        if (time.id !== 1) {
                            return <li className="lista-times" key={time.id}>
                                <Link to={`/time/${time.id}`}>
                                    <section className="times-card-container">
                                        <img className="logo-time" src={time.escudos["60x60"]} />
                                        <article className="nomes-container">
                                            <h2 className="nome">{time.nome}</h2>
                                            <p className="apelido">{time.apelido}</p>
                                        </article>
                                    </section>
                                </Link>
                            </li>
                        }
                    })
                    :
                    null
                }
            </ul>
        </main>
    )
}

export default Home