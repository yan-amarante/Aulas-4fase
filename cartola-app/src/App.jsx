import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  const cartolaLogo = "https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png"

  return (
    <section className='container'>
      <Link to="/">
        <img className='cartola-logo' src={cartolaLogo} />
      </Link>
      <Outlet />
    </section>
  )
}

export default App
