const CmpB = (props) => {

  const cambiarNombre = (event) => {
    // props.nombre = event.target.value
    props.handleChangeNombre(event.target.value)
  }

  return (
    <div>
      <h3>Cmp B</h3>
      <p>Nombre: {props.nombre}</p>
      <input type="text" value={props.nombre} onChange={cambiarNombre} />
    </div>
  )
}

export default CmpB
