import { combineReducers } from 'redux'
import user from '../modules/user/reducers/user'
import image from '../modules/image/reducers/image'

export default combineReducers({
  user, image
})
