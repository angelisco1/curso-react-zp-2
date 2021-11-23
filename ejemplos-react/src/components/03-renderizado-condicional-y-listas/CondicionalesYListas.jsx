import { isAuthenticated } from '../../utils/auth';
import Sugus from '../02-propiedades/Sugus';

const CondicionalesYListas = () => {

  const logueados = false;
  const sugus = [
    { id: 1, color: 'blue', sabor: 'piña' },
    { id: 2, color: 'orange', sabor: 'naranja' },
    { id: 3, color: 'yellow', sabor: 'limón' },
    { id: 4, color: 'red', sabor: 'fresa' },
  ]

  const listaSugus = sugus.map((s, pos) => {
    return <Sugus color={s.color} sabor={s.sabor} key={s.id} />
  })

  return (
    <div>
      <h2>Renderizado condicional y listas</h2>

      {logueados ? <button>Logout</button> : <button>Login</button>}
      {logueados ? <p>Usuario: Ángel</p> : null}
      {logueados && <p>Usuario: Ángel</p>}
      {isAuthenticated() && <p>Usuario: Ángel</p>}

      {listaSugus}

    </div>
  )
}

export default CondicionalesYListas


// export const OtroComponente = () => {
//   return (
//     <div>
//       <h2>Otro componente</h2>
//     </div>
//   )
// }