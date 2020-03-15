import * as ACTIONS from '~/actions'

export const DEFAULT_STATE = []

const products = (state=DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SAVE_PRODUCTS:
      return action.payload
    default:
      return state
  }
}

export default products

export const getAllProducts = state => state.products
export const getUnsoldProducts = state => state.products.filter(product => !product.sold)