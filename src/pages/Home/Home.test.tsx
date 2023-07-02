import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { mockedBikesArray } from 'mocks/Bike'
import Home from './Home.component'

describe('Home page', () => {
  it('should has a header', () => {
    render(
      <BrowserRouter>
        <Home appIsNotConfigured={false} bikes={mockedBikesArray} />
      </BrowserRouter>,
    )
    const headerElement = screen.getByTestId('header')
    expect(headerElement).toBeInTheDocument()
  })

  it('should display the bike list component when the bikes array is not empty', () => {
    render(
      <BrowserRouter>
        <Home appIsNotConfigured={false} bikes={mockedBikesArray} />
      </BrowserRouter>,
    )
    const bikeListElement = screen.getByTestId('bikes-list')
    expect(bikeListElement).toBeInTheDocument()
  })

  it('should display the loading component when the bikes array is empty', () => {
    render(
      <BrowserRouter>
        <Home appIsNotConfigured={false} bikes={[]} />
      </BrowserRouter>,
    )

    const loadingElement = screen.getByTestId('loading-message')
    expect(loadingElement).toBeInTheDocument()
  })

  it('should display an error message', () => {
    render(
      <BrowserRouter>
        <Home appIsNotConfigured bikes={[]} />
      </BrowserRouter>,
    )
    const listElement = screen.getByTestId('configuration-error-message')
    expect(listElement).toBeInTheDocument()
  })
})
