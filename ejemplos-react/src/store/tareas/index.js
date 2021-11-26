import { ADD_TAREA, COMPLETE_TAREA } from './action-types';

const addTarea = (state, tarea) => {
  const id = Math.random()
  tarea.id = id;
  return [...state, tarea]
}

const completeTarea = (state, id) => {
  return state.map(t => {
    if (t.id === id) {
      t.completada = !t.completada
    }
    return t
  })
}

export default function tareasReducer(state, action) {
  console.log({action})

  switch(action.type) {
    case ADD_TAREA:
      return addTarea(state, action.payload)
    case COMPLETE_TAREA:
      return completeTarea(state, action.payload)
    default:
      return state
  }
}