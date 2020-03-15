import * as ACTIONS from '~/actions'
import productsReducer, { DEFAULT_STATE } from '~/reducers/products'

describe('testing: reducers/products', () => {
  const mockProducts = [{ id: 'mock_id_1', title: 'mock_title_1' }, { id: 'mock_id_2', title: 'mock_title_2' }]
  let result
  
  describe('when no state provided', () => {
    beforeEach(() => {
      result = productsReducer(undefined, { type: 'MOCK_ACTION' })
    })
    
    it('returns default state', () => {
      expect(result).toBe(DEFAULT_STATE)
    })
  })
  
  describe('when receives SAVE_PRODUCTS action', () => {
    beforeEach(() => {
      result = productsReducer(DEFAULT_STATE, { 
        type: ACTIONS.SAVE_PRODUCTS,
        payload: mockProducts})
    })
    
    it('returns new state', () => {
      const newState = 
      expect(result).toEqual(mockProducts)
    })
  })
})