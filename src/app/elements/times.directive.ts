import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }

  @Input('appTimes') set render(times: number) {
    this.view.clear();

    for (let i = 0; i < times; i++) {
      this.view.createEmbeddedView(this.template);
    }
  }
}
