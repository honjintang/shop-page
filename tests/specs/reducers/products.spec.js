import * as ACTIONS from '~/actions'
import productsReducer, { DEFAULT_STATE, getAllProducts, getUnsoldProducts } from '~/reducers/products'

describe('testing: reducers/products', () => {
  const mockProducts = [{ id: 'mock_id_1', title: 'mock_title_1', sold: true }, { id: 'mock_id_2', title: 'mock_title_2', sold: false }]
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

    describe('selectors', () => {
      describe('#getAllProducts', () => {
          it('returns all products', () => {
              const mockState = { products: mockProducts}
              expect(getAllProducts(mockState)).toBe(mockProducts)
          })
      })

      describe('#getUnsoldProducts', () => {
          it('returns unsold products only', () => {
              const mockState = { products: mockProducts}
              expect(getUnsoldProducts(mockState)).toEqual([{ id: 'mock_id_2', title: 'mock_title_2', sold: false }])
          })
      })
  })
})