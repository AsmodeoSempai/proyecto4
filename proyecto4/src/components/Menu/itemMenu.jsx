import React from 'react'

function ItemMenu({image,name,price}) {
  return (
    <div className='MenuItem'>
      <div className='MenuCaja' style={ {backgroundImage: `url(${image})`}}></div> 
      <h1 className='NombreCaja'> {name} </h1>
      <p className='PrecioCaja'> ${price} </p>
    </div>
  )
}

export default ItemMenu
