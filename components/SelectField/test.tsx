import { render, screen } from '@testing-library/react'

import SelectField from '.'

const items = [
  {
    label: 'BMW',
    value: 'BMW'
  },
  {
    label: 'VW',
    value: 'VW'
  },
  {
    label: 'Ford',
    value: 'Ford'
  }
]

describe('<SelectField />', () => {
  it('should render the combobox', () => {
    const { container } = render(<SelectField items={items} />)

    expect(screen.getByRole('combobox')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
