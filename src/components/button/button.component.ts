import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faQuestion, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ButtonVariant, ButtonSize } from './button.types';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonComponent {
  @Input() faIconLeft: IconDefinition = faQuestion;
  @Input() faIconRight: IconDefinition = faQuestion;
  @Input() variant: ButtonVariant = 'primary';
  @Input() text = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() showFaIconLeft = false;
  @Input() showFaIconRight = false;
  @Input() showSvgIconLeft = false;
  @Input() showSvgIconRight = false;
  @Input() showIconLeft = false;
  @Input() showIconRight = false;
  @Input() svgIconLeft?: string;
  @Input() svgIconRight?: string;
  @Input() size: ButtonSize = 'medium';
  @Input() isDisabled = false;
  @Input() isLoading = false;
  @Output() onClick = new EventEmitter<Event>();
  @Output() clicked = new EventEmitter<void>();

  // Explicitly declare faSpinner as a readonly property
  readonly faSpinner: IconDefinition = faSpinner;

  constructor(private sanitizer: DomSanitizer) {}

  get classes(): string {
    return `button button--${this.size} button--${this.variant}`;
  }

  handleClick(event: Event) {
    if (!this.isLoading && !this.isDisabled) {
      this.onClick.emit(event);
      this.clicked.emit();
    }
  }

  getIcon(icon: IconDefinition | undefined): IconDefinition {
    return icon || faQuestion;
  }

  sanitizeSvg(url?: string): SafeResourceUrl | string {
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : '';
  }
}