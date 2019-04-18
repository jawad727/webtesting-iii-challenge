// Test away
import React from 'react'
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer'

import Dashboard from './Dashboard'

describe('<Dashboard />', () => {

    it.skip('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();

        expect(tree).toMatchSnapshot();
    })


})
