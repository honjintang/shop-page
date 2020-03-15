import React from 'react'
import { shallow } from 'enzyme'
import Product from '~/components/shop/Product'

describe('components/shop/Product', () => {
    let component

    describe('matches snapshot', () => {
        it('renders image with title, brand, size and price', () => {
            component = shallow(<Product 
                id='mockId'
                title='mockTitle'
                brand='mockBrand'
                size='mockSize'
                price='mockPrice'
                sold={false}
                 />)
            expect(component).toMatchSnapshot()
        })

        it('when product is sold renders with overlay', () => {
            component = shallow(<Product 
                id='mockId'
                title='mockTitle'
                size='mockSize'
                price='mockPrice'
                sold={true}
                 />)
            expect(component).toMatchSnapshot()
        })

        it('when brand is not present renders default N/A', () => {
            component = shallow(<Product 
                id='mockId'
                title='mockTitle'
                size='mockSize'
                price='mockPrice'
                sold={false}
                 />)
            expect(component).toMatchSnapshot()
        })
    })
})