import React from "react";
import img  from '../Quienes Somos/quienesomosimg/quienessomos.jpg'
import '../Quienes Somos/quienessomos.css'


export function QuienesSomos () {

    return(

        <div className="caja_qs">
          <div className="top" style={ {backgroundImage: `url(${img})`}}>


          </div>
          <div className="bottom">
          <h1 className="titulo_qs">Sobre Nosotros</h1>
          <p className="parrafo_qs">Lorem ipsum dolor sit a</p>
            
            
           </div>  



        </div>
    )
    
}