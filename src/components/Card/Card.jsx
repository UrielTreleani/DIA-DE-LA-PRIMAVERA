import React from 'react'

function Card({flower}) {
  return (
    <div className="card">
        <img src={flower.image} alt={flower.name} className='card__img'/>
        <div className='card__titles-container'>
            <h2 >
                {flower.name}
            </h2>
            <p>
                {flower.description}
            </p>
        </div>
    </div>
  )
}

export default Card