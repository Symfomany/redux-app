import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import Navbar from './navbar'

const setup = () => {

    const renderer = createRenderer();
    renderer.render(<Navbar />)
    const output = renderer.getRenderOutput()

    return {
        output: output,
        renderer: renderer
    }
}

describe('components', () => {
    describe('Navbar', () => {
        it('should render correctly', () => {
            const { output } = setup()

            expect(output.type).toBe('header')
            expect(output.props.className).toBe('header')

            const h1 = output.props.children

            expect(h1.type).toBe('h1')
        })

    })
})
