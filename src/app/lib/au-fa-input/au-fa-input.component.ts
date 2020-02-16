import {AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {InputRefDirective} from '../directives/input-ref.directive';
import {error} from 'util';

@Component({
  selector: 'app-au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss'],
})
export class AuFaInputComponent implements OnInit, AfterContentInit {
  @Input()
  icon: string;

  @ContentChild(InputRefDirective, {static: false}) input: HTMLInputElement;

  @HostBinding('class.input-focus')
  get isInputFocused() {
    return this.input ? this.input.focus : false;
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    if (!this.input) {
      console.error('error', error);
    }

  }

  get classes() {
    const cssClasses = {};
    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }

}
