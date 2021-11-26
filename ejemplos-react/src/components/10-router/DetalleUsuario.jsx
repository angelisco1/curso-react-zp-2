import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DetalleUsuario = () => {
  const [usuario, setUsuario] = useState({})
  const { usuarioId } = useParams()

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/users/${usuarioId}`)
      .then(resp => resp.json())
      .then(datos => {
        console.log(datos)
        setUsuario(datos)
      })

  }, [usuarioId])

  return (
    <div>
      <h4>Usuario con id {usuarioId}</h4>

      <pre>{JSON.stringify(usuario, null, 2)}</pre>
    </div>
  )
}

export default DetalleUsuario
