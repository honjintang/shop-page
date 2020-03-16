import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import heartOutline from '../../../assets/images/heart-outline.svg'
import blackHeart from '../../../assets/images/blackHeart.svg'

const Product = ({id, img, title, brand, price, size, sold }) => {
    const [ liked, setLiked ] = useState(false)

    return (
        <Card id={id}>
            <Card.Img className={sold ? 'card-img-sold' : null} variant="top" src={img} />
            {sold && <Card.ImgOverlay>
                <Card.Title>SOLD</Card.Title>
            </Card.ImgOverlay>}
            {<Card.ImgOverlay>
                <Card.Title className='like'>
                    {liked ? 
                    <img 
                        onClick={() => setLiked(!liked)}
                        src={blackHeart} 
                        width="22.5px" 
                        height="22.5px"
                    /> :
                    <img 
                        onClick={() => setLiked(!liked)}
                        src={heartOutline} 
                        width="22.5px" 
                        height="22.5px"
                    />
                }
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