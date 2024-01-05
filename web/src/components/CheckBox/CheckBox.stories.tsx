// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import { Form } from '@redwoodjs/forms'

import CheckBox from './CheckBox'

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'silverTree',
    },
  },
}

export default meta

type Story = StoryObj<typeof CheckBox>

export const Primary: Story = {
  render: () => (
    <Form>
      <CheckBox label="Label" name="name" />
    </Form>
  ),
}
