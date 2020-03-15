import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
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
                <Card.Header>
                    <h1>products</h1>
                </Card.Header>
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
