// import { jsx } from 'react/jsx-runtime'
import TiposDeComponentes from './01-tipos-de-componentes/TiposDeComponentes';
import Propiedades from './02-propiedades/Propiedades';
import CondicionalesYListas from './03-renderizado-condicional-y-listas/CondicionalesYListas';
import EventosYEstados from './04-eventos-y-estados/EventosYEstados';
import ComunicacionEntreCmps from './05-comunicacion-entre-componentes/ComunicacionEntreCmps';
import ChildrenYFragments from './06-children-y-fragments/ChildrenYFragments';
import ListaCocktails from './07-useeffect-y-http/ListaCocktails';
import TemasAvanzados from './08-temas-avanzados/TemasAvanzados';
import Formularios from './09-formularios/Formularios';
import AppRouter from './10-router/AppRouter';
import Redux from './11-redux/Redux';

const App = () => {
  return (
    <div>
      <h1>Ejemplos de React</h1>
      {/* <TiposDeComponentes /> */}
      {/* <Propiedades /> */}
      {/* <CondicionalesYListas /> */}
      {/* <EventosYEstados /> */}
      {/* <ComunicacionEntreCmps /> */}
      {/* <ChildrenYFragments /> */}
      {/* <ListaCocktails /> */}
      {/* <TemasAvanzados /> */}
      {/* <Formularios /> */}
      {/* <AppRouter /> */}
      <Redux />
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
