import React from 'react'
import { connect } from 'react-redux'
import CardColumns from 'react-bootstrap/CardColumns'
import Product from '~/components/shop/Product'
import { getProducts } from '~/actions'
import { getAllProducts, getUnsoldProducts } from '~/reducers/products'
import { isShowingSoldItems } from '~/reducers/display'

export const Feed = props => {
    const { products, getProducts } = props
    React.useEffect(() => {
        getProducts()
    }, [getProducts])

    return  (
        <>
            {products &&
                <CardColumns>
                    {products.map(p => <Product key={p.id} {...p} />)}
                </CardColumns>
            }
        </>
    )
}

export const mapStateToProps = state => ({
    products: isShowingSoldItems(state) ? getAllProducts(state) : getUnsoldProducts(state),
})

const mapDispatchToProps = {
    getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
