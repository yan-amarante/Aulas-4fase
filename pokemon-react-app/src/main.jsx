import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/index'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PokemonInfo from './Pages/PokemonInfo'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "pokemonInfo/:id",
    element: <PokemonInfo/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
