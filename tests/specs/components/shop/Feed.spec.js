import React from 'react'
import { shallow } from 'enzyme'
import { Feed } from '~/components/shop/Feed'

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

    it('renders all products', () => {
        expect(component).toMatchSnapshot()
    })
})