import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
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

Feed.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        slug: PropTypes.string,
        img: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        brand: PropTypes.string,
        size: PropTypes.string,
        date: PropTypes.string,
        seller: PropTypes.string,
        sold: PropTypes.bool,
    }).isRequired
  ).isRequired,
  getProducts: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
