import Contador from "./Contador"

const EventosYEstados = () => {

  const mostrarMensaje = (event) => { console.log('Hola mundo', event) }

  return (
    <div>
      <h2>Eventos y Estado</h2>

      <button type="button" onClick={mostrarMensaje}>Muestra hola mundo</button>

      <Contador />

    </div>
  )
}

export default EventosYEstados
