import React from 'react'
import Card from 'react-bootstrap/Card'

const Product = ({id, img, title, brand, price, size, sold }) => (
        <Card id={id}>
            <Card.Img variant="top" src={img} />
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

export default Product