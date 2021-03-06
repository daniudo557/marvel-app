import { actionsTypes } from '../actions/actionsTypes'

const INITIAL_STATE = {
  comics: []
}

const reducers = (state = INITIAL_STATE, action) => {
  const addComicToList = () => {
    const comicsArray = state.comics

    const isComicOnList = !!comicsArray
      .find(comics => comics.comicDetails.id === action.newValue.id)

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
