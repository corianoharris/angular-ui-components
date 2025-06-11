import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IconComponentProps } from './icon.types';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements IconComponentProps, OnChanges {
  @Input() useDefaultAria = false;
  @Input() ariaLabelContainer = '';
  @Input() ariaLabel = '';
  @Input() altText = '';
  @Input() srOnlyContent = '';
  @Input() faIconSize = 24;
  @Input() iconHeight = 24;
  @Input() iconWidth = 24;
  @Input() showFaIcon = false;
  @Input() faIcon: IconDefinition = faQuestion;
  @Input() showSvgIcon = false;
  @Input() svgIconSrc: SafeResourceUrl | string = '/icons/rocket.svg';
  @Input() faIconWeight: 'light' | 'thin' | 'regular' | 'solid' = 'regular';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['svgIconSrc'] && typeof this.svgIconSrc === 'string') {
      this.svgIconSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.svgIconSrc);
    }
    if (changes['faIcon'] && this.faIcon) {
      this.ariaLabel = this.faIcon.iconName;
    }
  }

  getFontAwesomeIcon(): string {
    const weightClass = {
      light: 'fal',
      thin: 'fat',
      regular: 'far',
      solid: 'fas'
    }[this.faIconWeight] || 'far';

    return `${weightClass} fa-${this.faIcon.iconName} fa-${this.faIconSize}`;
  }
}