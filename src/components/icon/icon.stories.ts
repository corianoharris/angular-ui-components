import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCableCar } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from './icon.component';
import { faIconsList } from './icons';

const svg = '/icons/rocket.svg';

export default {
  title: 'Components/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    faIcon: {
      control: { type: 'select' },
      options: faIconsList.map(option => option.label),
      mapping: faIconsList.reduce((acc, { label, value }) => ({
        ...acc,
        [label]: value,
      }), {} as { [key: string]: IconDefinition }),
    },
    showFaIcon: { control: 'boolean' },
    showSvgIcon: { control: 'boolean' },
    svgIconSrc: { control: 'text' },
    faIconWeight: {
      control: { type: 'select' },
      options: ['light', 'thin', 'regular', 'solid'],
    },
    faIconSize: { control: 'number' },
    iconWidth: { control: 'number' },
    iconHeight: { control: 'number' },
    ariaLabel: { control: 'text' },
    altText: { control: 'text' },
  },
} as Meta<IconComponent>;

type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {
    faIcon: faCableCar,
    showFaIcon: true,
    showSvgIcon: false,
    faIconWeight: 'regular',
    faIconSize: 24,
    iconWidth: 24,
    iconHeight: 24,
    ariaLabel: '',
    altText: '',
    svgIconSrc: svg,
  },
};