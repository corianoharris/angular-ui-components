import { SafeResourceUrl } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  faIconLeft?: IconDefinition;
  faIconRight?: IconDefinition;
  variant: ButtonVariant;
  type: ButtonType;
  text: string;
  showFaIconLeft?: boolean;
  showFaIconRight?: boolean;
  showSvgIconLeft?: boolean;
  showSvgIconRight?: boolean;
  showIconLeft?: boolean;
  showIconRight?: boolean;
  svgIconLeft?: string;
  svgIconRight?: string;
  size: ButtonSize;
  isDisabled: boolean;
  isLoading: boolean;
  onClick: EventEmitter<Event>;
  clicked: EventEmitter<void>;
}