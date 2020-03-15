import { combineReducers } from 'redux'
import products from './products'
import display from './display'

const rootReducer = () => combineReducers(
  { products, display }
)

export default rootReducer