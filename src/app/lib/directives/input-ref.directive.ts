import {Directive, HostListener} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'app-au-fa-input input'
})
export class InputRefDirective {
  focus: boolean = false;

  @HostListener('focus')
  onFocus() {
    this.focus = true;

  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }

}
