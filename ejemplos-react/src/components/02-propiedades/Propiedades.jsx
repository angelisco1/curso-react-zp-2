import Sugus from "./Sugus"

const Propiedades = () => {
  return (
    <div>
      <h2>Propiedades</h2>
      <Sugus color="blue" sabor="naranja" />
      <Sugus color="blue" sabor="piña" />
      <Sugus color="yellow" sabor="limón" />
      <Sugus />

      {/* <input type="text" />
      <input type="number" />
      <input type="color" /> */}
    </div>
  )
}

export default Propiedades
