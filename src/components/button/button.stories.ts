import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent} from './button.component';
import { ButtonType, ButtonVariant, ButtonSize } from './button.types';
import { faIconsList } from '../icon/icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    type: { 
      control: { type: 'select', options: ['button', 'submit', 'reset'] as ButtonType[] },
      type: { name: 'enum', value: ['button', 'submit', 'reset'] }
    },
    variant: { 
      control: { type: 'select', options: ['primary', 'secondary', 'tertiary', 'destructive'] as ButtonVariant[] },
      type: { name: 'enum', value: ['primary', 'secondary', 'tertiary', 'destructive'] }
    },
    size: { 
      control: { type: 'select', options: ['small', 'medium', 'large'] as ButtonSize[] },
      type: { name: 'enum', value: ['small', 'medium', 'large'] }
    },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    showIconLeft: { control: 'boolean' },
    showIconRight: { control: 'boolean' },
    showFaIconLeft: { control: 'boolean', if: { arg: 'showIconLeft', eq: true } },
    showFaIconRight: { control: 'boolean', if: { arg: 'showIconRight', eq: true } },
    showSvgIconLeft: { control: 'boolean', if: { arg: 'showIconLeft', eq: true } },
    showSvgIconRight: { control: 'boolean', if: { arg: 'showIconRight', eq: true } },
    faIconLeft: {
      control: { type: 'select' },
      options: faIconsList.map(option => option.label),
      mapping: faIconsList.reduce<{ [key: string]: IconDefinition }>((acc, cur) => {
        acc[cur.label] = cur.value;
        return acc;
      }, {}),
      if: { arg: 'showFaIconLeft', eq: true },
    },
    faIconRight: {
      control: { type: 'select' },
      options: faIconsList.map(option => option.label),
      mapping: faIconsList.reduce<{ [key: string]: IconDefinition }>((acc, cur) => {
        acc[cur.label] = cur.value;
        return acc;
      }, {}),
      if: { arg: 'showFaIconRight', eq: true },
    },
    svgIconLeft: { control: 'text', if: { arg: 'showSvgIconLeft', eq: true } },
    svgIconRight: { control: 'text', if: { arg: 'showSvgIconRight', eq: true } },
    clicked: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    text: 'Click me',
    type: 'button',
    variant: 'primary',
    size: 'medium',
    isDisabled: false,
    isLoading: false,
    showIconLeft: false,
    showIconRight: false,
    showFaIconLeft: false,
    showFaIconRight: false,
    showSvgIconLeft: false,
    showSvgIconRight: false,
    faIconLeft: faCoffee,
    faIconRight: faCoffee,
    svgIconLeft: '',
    svgIconRight: '',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};

export const Submit: Story = {
  args: {
    ...Default.args,
    text: 'Submit',
    type: 'submit',
    variant: 'primary',
  },
};

export const Reset: Story = {
  args: {
    ...Default.args,
    text: 'Reset',
    type: 'reset',
    variant: 'secondary',
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    text: 'Primary Button',
    type: 'button',
    variant: 'primary',
    showIconLeft: true,
    showIconRight: true,
    showFaIconLeft: true,
    showFaIconRight: true,
    showSvgIconLeft: false,
    showSvgIconRight: false,
    faIconLeft: faCoffee,
    faIconRight: faCoffee,
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    text: 'Secondary Button',
    type: 'button',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    ...Default.args,
    text: 'Tertiary Button',
    type: 'button',
    variant: 'tertiary',
  },
};

export const Destructive: Story = {
  args: {
    ...Default.args,
    text: 'Destructive Button',
    type: 'button',
    variant: 'destructive',
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    text: 'Loading Button',
    type: 'button',
    variant: 'primary',
    isLoading: true,
  },
};