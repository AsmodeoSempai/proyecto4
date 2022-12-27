import React from 'react';
import '../Header/header.css';
import img from '../imgenes/hamburguesa.jpg';

export function Header() {

  
  return ( 
    <section className='section'>
      <div className='caja_1'>
        <h1 className='tituloh1'>Disfuta de la comida</h1>
        <h2 className='tituloh2'>Como nunca antes</h2>
      </div>
      <div className='caja_2'>
        <img className='tituloimg' src={img}  alt=''/>
      </div> 
    </section>
  )
}

