import { combineReducers } from 'redux'
import { reducers as counterReducers } from './counter'
import { reducers as comicsReducers } from './comics'

const reducers = combineReducers({
  counterReducers,
  comicsReducers
})

export { reducers }
