import { Component, Input, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipProps } from './tooltip.types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements TooltipProps {
  @Input() title = '';
  @Input() content = '';
  @Input() boxShadow = false;
  @Input() isVisible = false;
  @Input() arrowPosition: 'left-center' | 'left-top' | 'left-bottom' | 'top-center' | 'top-left' | 'top-right' | 'right-top' | 'right-center' | 'right-bottom' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'none' = 'left-top';

  faTimes = faTimes;
  tooltipId = `tooltip-${Math.random().toString(36).slice(2, 11)}`;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const triggerElement = this.elementRef.nativeElement.querySelector('[data-tooltip-trigger]');
    if (triggerElement) {
      triggerElement.setAttribute('aria-describedby', this.tooltipId);
    }
  }

  @HostListener('mouseenter') showTooltip() {
    this.isVisible = true;
  }

  @HostListener('mouseleave') hideTooltip() {
    this.isVisible = false;
  }

  closeTooltip(event: Event) {
    event.stopPropagation();
    this.hideTooltip();
  }

  get classes(): string {
    const positionClass = this.arrowPosition !== 'none' ? `tooltip__position--${this.arrowPosition}` : '';
    const boxShadowClass = this.boxShadow ? 'tooltip--box-shadow' : '';
    return `tooltip-wrapper tooltip ${positionClass} ${boxShadowClass}`.trim();
  }
}