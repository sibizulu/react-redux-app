import { combineReducers } from 'redux'
import listing from './listing'
import favorite from './favorite'

export default combineReducers({
  listing,
  favorite
})
