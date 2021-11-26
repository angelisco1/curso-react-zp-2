import { ADD_TAREA, COMPLETE_TAREA } from './action-types';

export function addTarea(tarea) {
  return {
    type: ADD_TAREA,
    payload: tarea
  }
}

export function completeTarea(idTarea) {
  return {
    type: COMPLETE_TAREA,
    payload: idTarea
  }
}