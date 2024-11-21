import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input() appHighlightOnFocus = ''; // Highlight Color
  @Input() appHighlightOnBlur = ''; // Default color after losing focus

  constructor(private el: ElementRef) { }
  @HostListener('focus') onFocus() {
    this.highlight(this. appHighlightOnFocus|| 'green'); // Default focus color
  }

  @HostListener('blur') onBlur() {
    this.highlight(this.appHighlightOnBlur || 'pink'); // Default blur color
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
