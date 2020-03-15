import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { saveProducts } from '~/actions'

export default function* getProducts() {
  const response = yield call(axios.get, '/api/products')

  yield put(saveProducts(response.data))
}