import { actionsTypes } from './actionsTypes'

export const addToList = (value) => ({
  type: actionsTypes.ADD_COMIC_TO_LIST,
  newValue: value
})

export const removeFromList = (value) => ({
  type: actionsTypes.REMOVE_COMIC_FROM_LIST,
  newValue: value
})
