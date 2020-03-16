import React from 'react'
import { shallow } from 'enzyme'
import Product from '~/components/shop/Product'

describe('components/shop/Product', () => {
    let component
    const mockSetLiked = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation(liked => [liked, mockSetLiked])

    const renderProduct = props => (
        shallow(
            <Product 
                id={1}
                title='mockTitle'
                img='mockImg'
                brand='mockBrand'
                size='mockSize'
                price={20}
                sold={false}
                {...props}
            />
        )  
    )

    describe('matches snapshot', () => {
        it('renders image with title, brand, size and price', () => {
            component = renderProduct()
            expect(component).toMatchSnapshot()
        })

        it('when product is sold renders with overlay', () => {
            component = renderProduct({ sold: true })
            expect(component).toMatchSnapshot()
        })

        it('when brand is not present renders default N/A', () => {
            component = renderProduct({ brand: undefined })
            expect(component).toMatchSnapshot()
        })
    })

    describe('setLike', () => {
        beforeEach(() => {
            component = renderProduct()
        })

        it('product is not liked by default', () => {
            expect(useStateSpy).toHaveBeenCalledWith(false)
        })

        it('when clicked, the product is liked', () => {
            component.find('img').simulate('click')
            expect(mockSetLiked).toHaveBeenCalledWith(true)
        })
    })
})