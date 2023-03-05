import React from 'react'
import './Card.css'

const Card = ({producto}) => {
  return (
    
    <div key= {producto.id} className="card">
      <h3 className='cardName'>{producto.nombre}</h3>
      <img src={producto.imagen} className="cardImg"/>
      <p className='cardPrecio'>Precio: {producto.precio}</p>
    </div>
    

  )
}

export default Card
