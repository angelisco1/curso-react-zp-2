import { createStore } from 'redux'
import tareasReducer from './tareas'

export function getStore() {
  return createStore(tareasReducer, [])
}