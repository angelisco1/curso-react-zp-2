// COMPONENTE FUNCIONAL (_rafce)
import ComponenteDeClase from "./ComponenteDeClase"

const TiposDeComponentes = () => {

  const texto = 'Esto es un componente funcional'

  return (
    <div>
      <h2>Tipos de componentes</h2>
      <p>{texto}</p>
      <ComponenteDeClase />
    </div>
  )
}

export default TiposDeComponentes