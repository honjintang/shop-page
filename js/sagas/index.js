import { all, takeEvery } from 'redux-saga/effects'
import * as ACTIONS from '~/actions'
import getProducts from './getProducts'

export function* getProductsSaga() {
  yield takeEvery(ACTIONS.GET_PRODUCTS, getProducts)
}

export default function* rootSaga() {
  yield all([
    getProductsSaga()
  ])
}