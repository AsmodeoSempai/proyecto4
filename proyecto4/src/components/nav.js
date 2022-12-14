import { useRef } from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import "../index.css"


export function Navbar() {
    const navRef = useRef();

    const mostrarNavbar = () =>{
        navRef.current.classList.toggle('responsive_nav');
    }


    return (
        <header>
           <h3>Logo</h3>
           <nav ref={navRef}>
                <a href="#/">Inicio</a>
                <a href="#/">Menu</a>
                <a href="#/">Contacto</a>
                <a href="#/">Quienes Somos</a>
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

 