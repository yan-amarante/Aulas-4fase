import React from 'react';
import '../styles/styles.scss'


export default function Navbar(){
    return(
        <nav className="navbar">
          <li><a href="../App.jsx">Início</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Galeria</a></li>
        </nav>
    )
}