import React from 'react'
import Card from 'react-bootstrap/Card'
import Feed from '~/components/shop/Feed'
import HideSold from '~/components/shop/HideSold'

const App = () => (
    <>
            <h1>Viv's Vintage Shop</h1>
            <HideSold />
        <Feed />
    </>
)

export default App