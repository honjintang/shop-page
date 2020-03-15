import React from 'react'
import { shallow } from 'enzyme'
import { Feed, mapStateToProps } from '~/components/shop/Feed'
import { getAllProducts, getUnsoldProducts } from '~/reducers/products'
import { isShowingSoldItems } from '~/reducers/display'

jest.mock('~/reducers/display', () => ({
    isShowingSoldItems: jest.fn()
}))

jest.mock('~/reducers/products', () => ({
    getAllProducts: jest.fn(),
    getUnsoldProducts: jest.fn(),
}))

describe('components/shop/Feed', () => {
    const mockGetProducts= jest.fn()
    const mockProducts = [{ id: 'mock_id_1', title: 'mock_title_1' }, { id: 'mock_id_2', title: 'mock_title_2' }]
    let useEffect
    let component

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    }

    beforeEach(() => {
        useEffect = jest.spyOn(React, 'useEffect')
        mockUseEffect()
        component = shallow(<Feed getProducts={mockGetProducts} products={mockProducts}/>)
    })

    it('useEffect fetches products', () => {
        expect(mockGetProducts).toHaveBeenCalledTimes(1)
    })

    describe('display', () => {
        const mockState = {}
        describe('when sold products are not hidden', () => {
            it('selects all products from the store', () => {
                isShowingSoldItems.mockImplementation(() => true)
                mapStateToProps(mockState)
                expect(getAllProducts).toHaveBeenCalledWith(mockState)
                expect(getUnsoldProducts).toHaveBeenCalledTimes(0)
            })
        })

        describe('when sold products are hidden', () => {
            it('selects all products from the store', () => {
                isShowingSoldItems.mockImplementation(() => false)
                mapStateToProps(mockState)
                expect(getAllProducts).toHaveBeenCalledTimes(0)
                expect(getUnsoldProducts).toHaveBeenCalledWith(mockState)
            })
        })
        
    })

    
})