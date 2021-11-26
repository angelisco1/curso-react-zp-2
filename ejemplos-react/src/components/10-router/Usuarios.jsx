import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/users`)
      .then(resp => resp.json())
      .then(datos => {
        setUsuarios(datos)
      })
  }, [])

  const listaUsuarios = usuarios.map(u => (
    <li key={u.id}>
      <span>{u.name}</span>
      <Link to={'/usuarios/' + u.id}>Ver + info</Link>
    </li>
  ))

  return (
    <div>
      <h3>Usuarios</h3>

      <ul>
        {listaUsuarios}
      </ul>

      <Outlet />

    </div>
  )
}

export default Usuarios
