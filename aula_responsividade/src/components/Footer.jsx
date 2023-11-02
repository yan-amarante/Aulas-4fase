import React from 'react';
import Navbar from './Navbar';
import '../styles/styles.scss';


export default function Footer(){
    return(
        <footer className='footer container'>
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/previews/001/199/298/non_2x/paw-png.png" alt="Logo" srcset="" />
            </div>
            <Navbar />
        </footer>
    )
}