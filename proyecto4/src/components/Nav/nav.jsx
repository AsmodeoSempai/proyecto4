import React from "react";
import { useRef } from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import "../Nav/nav.css"
import { Link } from "react-router-dom";


export function Navbar() {
    const navRef = useRef();

    const mostrarNavbar = () =>{
        navRef.current.classList.toggle('responsive_nav');
    }
    return (
        <header>
           <h3>Logo</h3>
           <nav ref={navRef}>
                <Link to="/">Inicio</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/quienessomos">Quienes Somos</Link>
                <button className="nav-btn nav-close-btn" onClick={mostrarNavbar}>
                    <FaTimes/>
                </button>
           </nav>
           <button className="nav-btn" onClick={mostrarNavbar}>
                <FaBars/>
           </button>
        </header>
        

    );
}

 