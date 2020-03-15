import * as ACTIONS from '~/actions'

export const DEFAULT_STATE = {
    showSoldItems: true,
}

const display = (state=DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_SOLD_ITEMS:
      return {...state, showSoldItems: action.payload}
    default:
      return state
  }
}

export default display

export const isShowingSoldItems = state => state.display.showSoldItems