import React from 'react'
import Card from 'react-bootstrap/Card'
import heart from '../../../assets/images/heart-outline.svg'

const Product = ({id, img, title, brand, price, size, sold }) => {
    return (
        <Card id={id}>
            <Card.Img className={sold ? 'card-img-sold' : null} variant="top" src={img} />
            {sold && <Card.ImgOverlay>
                <Card.Title>SOLD</Card.Title>
            </Card.ImgOverlay>}
            {<Card.ImgOverlay>
                <Card.Title className='like'>
                    <img className='heart' src={heart} width="22.5px" height="22.5px"/>
                </Card.Title>
            </Card.ImgOverlay>}
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                <p>Brand: {brand || 'N/A'}</p>
                <p>Size: {size}</p>
                <p><b>Price: £{price}</b></p>
            </Card.Text>
            </Card.Body>
        </Card>
    )
} 

export default Product