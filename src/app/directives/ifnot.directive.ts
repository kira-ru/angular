import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {
  @Input('appIfnot') set ifNot(conditional: boolean) {
    if (!conditional) {
      // render
      this.containerRef.createEmbeddedView(this.templateRef)
    } else {
      // display none
      this.containerRef.clear()
    }
  }

  constructor(private templateRef: TemplateRef<HTMLDivElement>, private containerRef: ViewContainerRef) { }

}
