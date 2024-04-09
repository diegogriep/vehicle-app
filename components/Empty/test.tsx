import { render, screen } from '@testing-library/react'
import Empty from '.'

describe('<Empty />', () => {
  it('should inform to the user a message that the result is empty', () => {
    render(<Empty />)

    expect(
      screen.getByText(
        /Unfortunately, we haven`t found any vehicles with those criteria./i
      )
    ).toBeInTheDocument()
  })
})
