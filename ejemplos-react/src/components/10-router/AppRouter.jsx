import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Error from './Error'
import NuevoUsuario from './NuevoUsuario'
import DetalleUsuario from './DetalleUsuario'
import Usuarios from './Usuarios'

const AppRouter = () => {
  return (
    <div>
      <h2>React-Router v6</h2>

      <ul>
        <li>
          <Link to="/">Usuarios</Link>
        </li>
        <li>
          <Link to="/nuevo-usuario">Nuevo usuario</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/usuarios" element={<Usuarios />}>
          <Route path=":usuarioId" element={<DetalleUsuario />} />
        </Route>

        <Route path="/" element={<Navigate to="/usuarios" replace={true} />} />

        <Route path="/nuevo-usuario" element={<NuevoUsuario />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default AppRouter
