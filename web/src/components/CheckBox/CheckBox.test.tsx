import { render } from '@redwoodjs/testing/web'

import CheckBox from './CheckBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CheckBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CheckBox />)
    }).not.toThrow()
  })
})
