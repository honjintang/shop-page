import React from 'react'
import { connect } from 'react-redux'
import CardColumns from 'react-bootstrap/CardColumns'
import Product from '~/components/shop/Product'
import { getProducts } from '~/actions'
import { getAllProducts } from '~/reducers/products'

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

const mapStateToProps = state => ({
    products: getAllProducts(state),
})

const mapDispatchToProps = {
    getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
