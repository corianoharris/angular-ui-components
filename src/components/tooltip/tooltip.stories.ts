import { Meta, StoryObj } from '@storybook/angular';
import TooltipComponent from './tooltip.component';

export default {
  title: 'Components/Tooltip',
  component: TooltipComponent,
  argTypes: {
    boxShadow: { control: 'boolean' },
    arrowPosition: {
      options: [
        'none', 
        'left-center', 'left-top', 'left-bottom', 
        'top-center', 'top-left', 'top-right', 
        'right-top', 'right-center', 'right-bottom', 
        'bottom-center', 'bottom-left', 'bottom-right'
      ],
      control: {
        type: 'select',
      },
    },
    content: { control: 'text' },
    title: { control: 'text' },
    isVisible: { control: 'boolean' }
  },
} as Meta;

type Story = StoryObj<TooltipComponent>;

export const NoArrow: Story = {
  args: {
    content: 'This is a tooltip with no arrow',
    boxShadow: true,
    isVisible: true,
    arrowPosition: 'none',
  },
};

export const ArrowLeftCenter: Story = {
  args: {
    content: 'This is a tooltip with arrow at left center',
    boxShadow: true,
    isVisible: true,
    arrowPosition: 'left-center',
  },
};

export const ArrowLeftTop: Story = {
  args: {
    content: 'This is a tooltip with arrow at left top',
    boxShadow: true,
    isVisible: true,
    arrowPosition: 'left-top',
  },
};

export const ArrowRightTop: Story = {
  args: {
    content: 'This is a tooltip with arrow at right top',
    boxShadow: true,
    isVisible: true,
    arrowPosition: 'right-top',
  },
};

export const ArrowRightBottom: Story = {
  args: {
    content: 'This is a tooltip with arrow at right bottom',
    boxShadow: true,
    isVisible: true,
    arrowPosition: 'right-bottom',
  },
};

export const ArrowLeftBottom: Story = {
  args: {
    content: 'This is a tooltip with arrow at left bottom',
    boxShadow: true,
    isVisible: true,
    arrowPosition: 'left-bottom',
  },
};

export const ArrowCenterTop: Story = {
  args: {
    content: 'This is a tooltip with arrow at top center',
    boxShadow: true,
    isVisible: true,
    arrowPosition: 'top-center',
  },
};
