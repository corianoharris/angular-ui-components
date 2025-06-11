import { Meta, StoryObj } from '@storybook/angular';
import { TooltipComponent } from './tooltip.component';

export default {
  title: 'Components/Tooltip',
  component: TooltipComponent,
  argTypes: {
    boxShadow: { control: 'boolean' },
    arrowPosition: {
      control: { type: 'select' },
      options: [
        'none',
        'left-center', 'left-top', 'left-bottom',
        'top-center', 'top-left', 'top-right',
        'right-top', 'right-center', 'right-bottom',
        'bottom-center', 'bottom-left', 'bottom-right',
      ],
    },
    content: { control: 'text' },
    title: { control: 'text' },
    isVisible: { control: 'boolean' },
  },
} as Meta<TooltipComponent>;

type Story = StoryObj<TooltipComponent>;

const defaultArgs = {
  boxShadow: true,
  isVisible: true,
};

export const NoArrow: Story = {
  args: {
    ...defaultArgs,
    content: 'Tooltip with no arrow',
    arrowPosition: 'none',
  },
};

export const ArrowLeftCenter: Story = {
  args: {
    ...defaultArgs,
    content: 'Tooltip with arrow at left center',
    arrowPosition: 'left-center',
  },
};

export const ArrowLeftTop: Story = {
  args: {
    ...defaultArgs,
    content: 'Tooltip with arrow at left top',
    arrowPosition: 'left-top',
  },
};

export const ArrowRightTop: Story = {
  args: {
    ...defaultArgs,
    content: 'Tooltip with arrow at right top',
    arrowPosition: 'right-top',
  },
};

export const ArrowRightBottom: Story = {
  args: {
    ...defaultArgs,
    content: 'Tooltip with arrow at right bottom',
    arrowPosition: 'right-bottom',
  },
};

export const ArrowLeftBottom: Story = {
  args: {
    ...defaultArgs,
    content: 'Tooltip with arrow at left bottom',
    arrowPosition: 'left-bottom',
  },
};

export const ArrowCenterTop: Story = {
  args: {
    ...defaultArgs,
    content: 'Tooltip with arrow at top center',
    arrowPosition: 'top-center',
  },
};