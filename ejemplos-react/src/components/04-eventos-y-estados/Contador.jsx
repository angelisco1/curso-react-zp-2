import { useState } from "react"

const Contador = () => {
  const [cuenta, setCuenta] = useState(9)

  const decrementar = () => {
    if (cuenta !== 0) {
      setCuenta(cuenta - 1)
    }
  }

  const incrementar = () => setCuenta(cuenta + 1)

  const cambiarCuenta = (event) => {
    setCuenta(Number(event.target.value))
    // setCuenta(Number(event.nativeEvent.data))
  }

  return (
    <div>
      <button onClick={decrementar}>-</button>
      <span>Cuenta: {cuenta}</span>
      <button onClick={incrementar}>+</button>
      <input type="number" value={cuenta} onChange={cambiarCuenta} />
    </div>
  )
}

export default Contador
