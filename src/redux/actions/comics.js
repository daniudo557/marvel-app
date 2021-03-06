import { actionsTypes } from './actionsTypes'

const actions = {
  addToList: () => ({
    type: actionsTypes.ADD_COMIC_TO_LIST
  }),
  removeFromList: () => ({
    type: actionsTypes.REMOVE_COMIC_FROM_LIST
  })
}

export { actions }
