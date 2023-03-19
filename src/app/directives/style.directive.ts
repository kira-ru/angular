import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appstyle]',
})
export class StyleDirective {
  @Input('appstyle') color = 'blue'
  @Input() fs = '11px'
  constructor(private el: ElementRef, private r: Renderer2) {
  }

  @HostListener('mouseenter')
  mouseEnterHandler() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color)
    this.r.setStyle(this.el.nativeElement, 'fontSize', this.fs)
  }

  @HostListener('mouseleave')
  mouseOverHandler() {
    this.r.setStyle(this.el.nativeElement, 'color', null)
  }
}
