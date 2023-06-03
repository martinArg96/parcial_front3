import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './components/Formulario'
import Card from './components/Card'

function App() {
  const [usuario, setUsuario] = useState({})

  function handleUsuario(usuario){
    console.log(usuario)
    setUsuario(usuario)

  }
  

  return (
    <>
      
      <h4>App</h4>
      <Formulario onUsuario={handleUsuario}/>
      <Card nombre={usuario.nombre}
            color={usuario.color}
      />
    </>
  )
}

export default App
