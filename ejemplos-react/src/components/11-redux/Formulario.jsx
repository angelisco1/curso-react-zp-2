import { useDispatch } from 'react-redux'
import InputForm from '../09-formularios/InputForm';
import { useInput } from '../../hooks/useInput';
import { addTarea } from '../../store/tareas/actions';
import { useState } from 'react';


const Formulario = () => {
  const [titulo, setTitulo] = useInput('Tarea 1', [])
  const [completada, setCompletada] = useState(false)
  const dispatch = useDispatch()

  const completarTarea = () => setCompletada(!completada)
  const guardarTarea = (e) => {
    e.preventDefault()
    const action = addTarea({titulo, completada})
    dispatch(action)
  }

  return (
    <div>
      <h3>Nueva tarea</h3>
      <form onSubmit={guardarTarea}>
        <InputForm
          label="Título"
          id="titulo"
          value={titulo}
          onChange={setTitulo}
          valid={true}
          errores={[]}
        />
        <div>
          <label htmlFor="completada">Está completa?</label>
          <input type="checkbox" checked={completada} onChange={completarTarea} />
        </div>

        <button type="submit">Crear tarea</button>
      </form>
    </div>
  )
}

export default Formulario
