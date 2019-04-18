// Test away
import React from 'react'
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer'

import Controls from './Controls'

describe('<Controls />', () => {

    it.skip('matches snapshot', () => {
        const tree = renderer.create(<Controls />).toJSON();

        expect(tree).toMatchSnapshot();
    })


    it('should call the toggleLocked prop', () => {
        const toggleLocked = jest.fn();

        const {getByText} = render(<Controls toggleLocked={toggleLocked}/>)

        fireEvent.click(getByText(/lock gate/i))
        
        expect(toggleLocked).toHaveBeenCalled()
    })


    it('should call the toggleUnlocked prop', () => {
        const toggleUnlocked = jest.fn();

        const {getByText} = render(<Controls toggleUnlocked={toggleUnlocked}/>)

        fireEvent.click(getByText(/lock gate/i))
        
        expect(toggleUnlocked).toHaveBeenCalled()
    })
})
