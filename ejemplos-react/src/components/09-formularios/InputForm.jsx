const InputForm = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange} />
      {!props.valid && <ul>
        {props.errores.map(e => <li key={e.id}>{e.msg}</li>)}
      </ul>}
    </div>
  )
}

export default InputForm
