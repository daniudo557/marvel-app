import { actionsTypes } from '../actions/actionsTypes'

const INITIAL_STATE = {
  comics: 0
}

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_COMIC_TO_LIST:
      return { ...state, comics: state.comics - 1 }
    case actionsTypes.REMOVE_COMIC_FROM_LIST:
      return { ...state, comics: state.comics + 1 }
    default:
      return state
  }
}

export { reducers }
