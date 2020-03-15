import React from 'react'
import { shallow } from 'enzyme'
import { HideSold } from '~/components/shop/HideSold'

describe('components/shop/HideSold', () => {
    const mockToggleSoldItems= jest.fn()
    const defaultShowSoldItems = true
    let component

    beforeEach(() => {
        component = shallow(<HideSold toggleSoldItems={mockToggleSoldItems} showSoldItems={defaultShowSoldItems}/>)
    })

    it('matches snapshot', () => {
        expect(component).toMatchSnapshot()
    })

    it('toggles sold items when clicked', () => {
        expect(mockToggleSoldItems).toHaveBeenCalledTimes(0)
        component.simulate('click')
        expect(mockToggleSoldItems).toHaveBeenCalledTimes(1)
        expect(mockToggleSoldItems).toHaveBeenCalledWith(!defaultShowSoldItems)
    })
})