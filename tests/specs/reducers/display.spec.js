import * as ACTIONS from '~/actions'
import displayReducer, { DEFAULT_STATE, isShowingSoldItems } from '~/reducers/display'

describe('testing: reducers/display', () => {
  let result
  const mockIsShowingSoldItems = true
  
  describe('when no state provided', () => {
    beforeEach(() => {
      result = displayReducer(undefined, { type: 'MOCK_ACTION' })
    })
    
    it('returns default state', () => {
      expect(result).toBe(DEFAULT_STATE)
    })
  })
  
  describe('when receives TOGGLE_SOLD_ITEMS action', () => {
    beforeEach(() => {
        result = displayReducer(DEFAULT_STATE, { 
            type: ACTIONS.TOGGLE_SOLD_ITEMS,
            payload: mockIsShowingSoldItems
        })
    })
    
    it('returns new state', () => {
      const newState = 
      expect(result).toEqual({...DEFAULT_STATE, showSoldItems: mockIsShowingSoldItems})
    })
  })

  describe('selectors', () => {
      describe('#isShowingSoldItems', () => {
          it('returns showSoldItems', () => {
              const mockState = { display: { showSoldItems: false }}
              expect(isShowingSoldItems(mockState)).toBe(false)
          })
      })
  })
})