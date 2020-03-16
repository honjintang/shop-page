import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import heartOutline from '../../../assets/images/heart-outline.svg'
import blackHeart from '../../../assets/images/blackHeart.svg'

const Product = ({id, img, title, brand, price, size, sold }) => {
    const [ liked, setLiked ] = React.useState(false)

    return (
        <Card id={id}>
            <Card.Img className={sold ? 'card-img-sold' : null} variant="top" src={img} />
            {sold && <Card.ImgOverlay>
                <Card.Title>SOLD</Card.Title>
            </Card.ImgOverlay>}
            {<Card.ImgOverlay>
                <Card.Title className='like'>
                    <img 
                        onClick={() => setLiked(!liked)}
                        src={liked ? blackHeart : heartOutline} 
                    />
                </Card.Title>
            </Card.ImgOverlay>}
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                <span>Brand: {brand || 'N/A'}</span>
                <span>Size: {size}</span>
                <span><b>Price: £{price}</b></span>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string,
    price: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    sold: PropTypes.bool.isRequired,
}

export default Product