import { useSelector, useDispatch } from 'react-redux'
import { completeTarea } from '../../store/tareas/actions'

const ListaTareas = () => {

  const tareas = useSelector((state) => state)
  const dispatch = useDispatch()

  const listaTareas = tareas.map(t => (
    <li
      key={t.id}
      style={{textDecoration: t.completada ? 'line-through' : 'none'}}
      onClick={() => dispatch(completeTarea(t.id))}>
      {t.titulo}
    </li>
  ))

  return (
    <div>
      <h3>Tareas</h3>

      <ul>
        {listaTareas}
      </ul>
    </div>
  )
}

export default ListaTareas