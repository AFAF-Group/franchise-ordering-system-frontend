import { render, screen } from 'utils/test-utils'

import Hero from '.'

describe('<Hero/ >', () => {
  it('should render with a default heading', () => {
    render(<Hero />)

    expect(screen.getByRole('img', { name: /chakra-ui logo/i }))
    const expTitle = 'Franchise Ordering System'

    expect(
      screen.getByRole('heading', {
        name: expTitle
      })
    ).toBeInTheDocument()

    // expect(container.parentElement).toMatchSnapshot()
  })

  it('should render with a passed heading', () => {
    const newTitle = 'testing title'
    render(<Hero title={newTitle} />)

    expect(screen.getByRole('heading', { name: newTitle })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: newTitle }).parentElement
    ).toHaveStyleRule(
      'background-image',
      'linear-gradient(to left, #7928CA, #FF0080)'
    )
  })
})
