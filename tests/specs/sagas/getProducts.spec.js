import axios from 'axios'
import getProducts from '~/sagas/getProducts'

describe('testing: sagas/getProducts', () => {
  let iterator
  let result

  beforeEach(() => {
    iterator = getProducts()
  })

  describe('on first yield', () => {
    beforeEach(() => {
      result = iterator.next()
    })

    it('fetch products data', () => {
      expect(result.value).toEqual({
        '@@redux-saga/IO': true,
        combinator: false,
        payload: {
          args: ['/api/products'],
          context: null,
          fn: axios.get,
        },
        type: 'CALL',
      })
    })
  })

    describe('on second yield', () => {
    beforeEach(() => {
      iterator.next()
      result = iterator.next({ data: [{ id: 'mock_id_1', title: 'mock_title_1' }, { id: 'mock_id_2', title: 'mock_title_2' }] }) 
    })

    it('dispatches `SAVE_PRODUCTS` action', () => {
      expect(result.value).toEqual({
        '@@redux-saga/IO': true, 
        combinator: false,
        payload: {
          action: {
            payload: [{ id: 'mock_id_1', title: 'mock_title_1' }, { id: 'mock_id_2', title: 'mock_title_2' }],
            type: 'SAVE_PRODUCTS',
          },
          channel: undefined,
        },
        type: 'PUT',
      })
    })
  })
})