import { Directive, ElementRef, Renderer,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dhHighlight]'
})
export class HighlightDirective {

  private _defaultColor = 'red';

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @Input() dhHighlight: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.dhHighlight || this._defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
