import { actionsTypes } from '../actions/actionsTypes'
import { getComicOnList } from '../../functions/utils'
const INITIAL_STATE = {
  comics: []
}

const reducers = (state = INITIAL_STATE, action) => {
  const addComicToList = () => {
    const comicsArray = state.comics
    const isComicOnList = !!getComicOnList(comicsArray, action.newValue.id)

    // if comic is not on list, it must start
    // with numberOfComics equals to 1
    if (!isComicOnList) {
      const newComicObject = {
        numberOfComics: 1,
        comicDetails: action.newValue
      }
      comicsArray.push(newComicObject)

      return [...comicsArray]
    }

    return comicsArray.map(comic =>
      comic.comicDetails.id === action.newValue.id
        ? { ...comic, numberOfComics: comic.numberOfComics + 1 }
        : comic
    )
  }

  const removeComicFromList = () => {
    const comicsArray = state.comics
    const comicObject = getComicOnList(comicsArray, action.newValue.id)
    const isComicOnList = !!comicObject

    // if comic is not on list, it can't be removed
    if (!isComicOnList) { return [...comicsArray] }

    // if numberOfComics is equals to 1, it object
    // has to be be removed from list
    if (comicObject.numberOfComics === 1) {
      return comicsArray
        .filter((comic) => comic.comicDetails.id !== action.newValue.id)
    }

    return comicsArray.map(comic =>
      comic.comicDetails.id === action.newValue.id
        ? { ...comic, numberOfComics: comic.numberOfComics - 1 }
        : comic
    )
  }

  switch (action.type) {
    case actionsTypes.ADD_COMIC_TO_LIST:
      return { ...state, comics: addComicToList() }
    case actionsTypes.REMOVE_COMIC_FROM_LIST:
      return { ...state, comics: removeComicFromList() }
    default:
      return state
  }
}

export { reducers }
