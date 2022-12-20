import React from 'react';
import '../Header/header.css';
import img from '../imgenes/hamburguesa.jpg';




export function Header() {

  
  return (
    <section>
      <div className='caja_1'>
        <h1>Disfuta de la comida</h1>
        <h2>Como nunca antes</h2>
      </div>
      <div className='caja_2'>
        <img src={img}  alt=''/>
      </div> 
    </section>
  )
}

