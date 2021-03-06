import { actionsTypes } from '../actions/actionsTypes'

const INITIAL_STATE = {
  comics: []
}

const reducers = (state = INITIAL_STATE, action) => {
  const addComicToList = () => {
    const comicObject = state.comics
      .find(comics => comics.comicDetails.id === action.newValue.id)

    const isComicOnList = !!comicObject
    const newComicsArray = state.comics

    if (!isComicOnList) {
      const newComicObject = {
        numberOfComics: 1,
        comicDetails: action.newValue
      }
      newComicsArray.push(newComicObject)

      console.log('ARRAY depois', newComicsArray)
      return [...newComicsArray]
    }

    const index = state.comics
      .findIndex(comic => comic.comicDetails.id === action.newValue.id)

    const newComicObject = {
      numberOfComics: comicObject.numberOfComics + 1,
      comicDetails: comicObject.comicDetails
    }

    newComicsArray[index] = newComicObject

    return [...newComicsArray]
  }

  switch (action.type) {
    case actionsTypes.ADD_COMIC_TO_LIST:
      return { ...state, comics: addComicToList() }
    case actionsTypes.REMOVE_COMIC_FROM_LIST:
      return { ...state, comics: state.comics + 1 }
    default:
      return state
  }
}

export { reducers }
