import "./styles.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Home() {

    const [times, setTimes] = useState([])

    function timesTratativa(objeto) {

        let times = []

        Object.keys(objeto).forEach(function (key, index) {
            console.log(objeto[key].nome)
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
                            return <Link to={`/time/${time.id}`}>
                                <li key={time.id}>
                                    <img src={time.escudos["30x30"]} />
                                    <h2>{time.nome}</h2>
                                    <p>{time.apelido}</p>
                                </li>
                            </Link>
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