// import { jsx } from 'react/jsx-runtime'
import TiposDeComponentes from './01-tipos-de-componentes/TiposDeComponentes';

const App = () => {
  return (
    <div>
      <h1>Ejemplos de React</h1>
      <TiposDeComponentes />
    </div>
  )

  // return jsx(
  //   'div', {
  //     id: 'main',
  //     children: jsx(
  //       'h1', {
  //         className: 'titulo',
  //         children: ['Hola mundo!!!']
  //       }
  //     )
  //   }
  // )
}

export default App
