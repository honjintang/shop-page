import React from 'react'
import { shallow } from 'enzyme'
import ReusableButton from '~/components/general/ReusableButton'

describe('components/general/ReusableButton', () => {
    let component
    const mockFn = jest.fn()

    it('matches snapshot', () => {
        component = shallow(<ReusableButton 
                id='mockId'
                label='button label'
                onChange={mockFn}
                active={false}
                 />)
            expect(component).toMatchSnapshot()
    })
})