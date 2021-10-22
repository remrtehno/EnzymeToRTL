import React from 'react'
import {render, screen, queryByAttribute} from '@testing-library/react'
import OrderedList from './OrderedList'
import {OrderedListOption} from './OrderedListOption'

describe('Our test suite', () => {
  test('renders all the mocked animal options', () => {
    const animals = ['duck', 'bear', 'whale']

    const {getByText, container} = render(<OrderedList options={animals} />)

    const animal = getByText('duck')
    expect(animal).toBeTruthy()

    expect(container.querySelector('.options')).toBeDefined()
    expect(screen.getAllByRole('listitem')).toHaveLength(animals.length)
  })

  test('renders no animal options', () => {
    const animals = []
    const {container} = render(<OrderedList options={animals} />)

    expect(container.querySelector('.empty')).toBeDefined()
  })

  test('renders a single animal option', () => {
    const animals = ['duck']
    const {container} = render(<OrderedList options={animals} />)

    // expect(container.queryByAttribute()).toBeTruthy()
  })

  it('renders correct text in animal option', () => {
    const animals = ['duck', 'bear', 'whale']
    const {container} = render(<OrderedList options={animals} />)

    expect(container.querySelector('.value').innerHTML).toEqual('duck')
  })
})
