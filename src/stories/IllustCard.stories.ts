import type { Meta, StoryObj } from '@storybook/react';
import { IllustCard } from './IllustCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof IllustCard> = {
  // title: 'Example/IllustCard',
  component: IllustCard,
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IllustCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: '名前',
    category: 'WEBデザイナー',
    src: 'https://placehold.jp/300x300.png'
  },
};
