import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import Search from './search'

const setup = () => {

    const renderer = createRenderer();
    renderer.render(<Search />)
    const output = renderer.getRenderOutput()

    return {
        output: output,
        renderer: renderer
    }
}

describe('components', () => {
    describe('Search', () => {
        it('should render correctly', () => {
            const { output } = setup()

            expect(output.type).toBe('nav')
            expect(output.props.className).toBe('navbar navbar-expand-lg')
        })

    })
})
