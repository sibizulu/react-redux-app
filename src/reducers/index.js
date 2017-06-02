import { combineReducers } from 'redux'
import listing from './listing'
import favorite from './favorite'
import posting from './posting'
import { reducer as reducerForm } from 'redux-form'

export default combineReducers({
  form: reducerForm,
  listing,
  favorite,
  posting
})
