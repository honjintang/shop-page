import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

const Product = ({id, img, title, brand, price, size, sold }) => {
    return (
        <Card id={id}>
            <Card.Img className={sold ? 'card-img-sold' : null} variant="top" src={img} />
            {sold && <Card.ImgOverlay>
                <Card.Title>SOLD</Card.Title>
            </Card.ImgOverlay>}
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                <p>Brand: {brand || 'N/A'}</p>
                <p>Size: {size}</p>
                <p>Price: £{price}</p>
            </Card.Text>
            </Card.Body>
        </Card>
    )
} 

export default Product