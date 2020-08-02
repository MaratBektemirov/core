import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: `[passwordRegistrationDirective]`
})
export class PasswordRegistrationDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef<HTMLInputElement>) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.elementRef.nativeElement.type = 'password';
    }, 500);
  }
}
