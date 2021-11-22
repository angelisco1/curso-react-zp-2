// COMPONENTE DE CLASE (rcc)
import { Component } from 'react'

export default class ComponenteDeClase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      estado1: true,
      estado2: 4
    }
  }

  render() {
    return (
      <div>
        <p>Esto es un componente de clase</p>
        <p>Num: {this.state.estado2}</p>
      </div>
    )
  }
}
