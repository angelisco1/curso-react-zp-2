import { useEffect, useState } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([])
  const [queryParams] = useSearchParams()
  console.log(queryParams)

  useEffect(() => {
    let url = 'http://jsonplaceholder.typicode.com/users'

    if (queryParams.has('limit')) {
      url += `?_limit=${queryParams.get('limit')}`
    }

    fetch(url)
      .then(resp => resp.json())
      .then(datos => {
        setUsuarios(datos)
      })
  }, [queryParams])

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
