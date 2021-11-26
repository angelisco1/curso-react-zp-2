import { useNavigate } from "react-router-dom"

const NuevoUsuario = () => {
  const navigate = useNavigate()

  const guardar = (event) => {
    console.log('Guardando los datos...')
    setTimeout(() => {
      console.log('Datos guardados correctamente...')
      navigate('/', { replace: true })
    }, 1500)
  }

  return (
    <div>
      <h3>Nuevo usuario</h3>

      <button type="button" onClick={guardar}>Crear usuario</button>
    </div>
  )
}

export default NuevoUsuario
