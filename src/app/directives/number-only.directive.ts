import { NgControl } from '@angular/forms';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: `[numberOnly]`
})
export class NumberOnlyDirective {
  private el: NgControl;

  constructor(private ngControl: NgControl) {
    this.el = ngControl;
  }

  @HostListener('input', ['$event.target.value'])
  public onInput(value: string) {
    this.el.control.patchValue(value.replace(/[^0-9]/g, ''));
  }
}
