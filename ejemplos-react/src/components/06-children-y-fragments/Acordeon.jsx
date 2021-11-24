import { useState } from 'react'
import './Acordeon.css'

const Acordeon = (props) => {
  const [abierto, setAbierto] = useState(false)

  const toggleAbierto = () => {
    setAbierto(!abierto)
  }

  return (
    <div className="acordeon">
      <div className="acordeon-heading" onClick={toggleAbierto}>
        <h4>{props.titulo}</h4>
      </div>
      <div className={abierto ? 'acordeon-content abierto' : 'acordeon-content cerrado'}>
        {props.children}
      </div>
    </div>
  )
}

export default Acordeon
