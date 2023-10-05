import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  const cartolaLogo = "https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png"

  return (
    <section className='container'>
    <img className='cartola-logo' src={cartolaLogo}/>
    <Outlet/>
    </section>
  )
}

export default App
