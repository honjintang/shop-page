export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS'

export const getProducts = () => ({
    type: GET_PRODUCTS,
})

export const saveProducts = payload => ({
    type: SAVE_PRODUCTS,
    payload,
})