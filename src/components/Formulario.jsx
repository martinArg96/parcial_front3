import React, { useState } from 'react'

const Formulario = (props) => {
    const [nombre, setNombre] = useState("")
    const [color, setColor] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log("formulario enviado")
        if(!nombre || !color){
            setError("Por favor ingrese todos los campos")
        }else if(nombre.length<3){
            setError("El nombre no debe ser menor a 3 letras")
        } 
        else if(color.length<3){
            setError("El color no debe ser menor a 6 letras")
        }
        else{
        const user ={
            nombre:nombre,
            color: color
        }
        console.log(user.nombre)
        console.log(user.color)
        props.onUsuario(user)
        }
    }

    function handleChangeNombre(e){
        
        setNombre(e.target.value.trim())
        
    }

    function handleChangeColor(e){
        setColor(e.target.value.trim())
        
    }


return (
    <div className='formu'>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                type="text" 
                id='nombre'
                
                placeholder='ingrese su nombre'
                onChange={handleChangeNombre}
                value={nombre}
                
                />
            </div>
            
            <div>
                <input 
                type="text"
                id='color'
                
                placeholder='ingrese color' 
                onChange={handleChangeColor}
                value={color}
                
                />
            </div>
            
            <button type="submit">Enviar</button>
            <div>
            {
            error ? <p className='error'>{error}</p>  : null
            }
        </div>
        </form>
    
    
    </div>
)
}

export default Formulario
