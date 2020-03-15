import React from 'react'
import { shallow } from 'enzyme'
import App from '~/components/App'

describe('components/App', () => {
    it('matches snapshot', () => {
        const component = shallow(<App />)
        expect(component).toMatchSnapshot()
    })
})