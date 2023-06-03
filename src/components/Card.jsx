import React from 'react'

const Card = (props) => {
    return (
    
        <div>
            {((props.nombre && props.color)?

                <div className='card'>
                <h2>Card</h2>
                <p>Hola {props.nombre}!!</p>
                <p>Sabemos que tu color favorito es {props.color}</p>
                </div>
            : undefined

            )}



        </div>

    
    )
}

export default Card
