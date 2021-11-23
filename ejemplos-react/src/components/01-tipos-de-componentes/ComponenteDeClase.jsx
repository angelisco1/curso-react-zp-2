// COMPONENTE DE CLASE (rcc)
import { Component } from 'react'

export default class ComponenteDeClase extends Component {
  // static defaultProps = {}
  // static propTypes = {}

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

// ComponenteDeClase.defaultProps = {}
// ComponenteDeClase.propTypes = {}