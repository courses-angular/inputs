import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuFaInputComponent} from './au-fa-input/au-fa-input.component';
import {InputRefDirective} from './directives/input-ref.directive';



@NgModule({
  declarations: [
    AuFaInputComponent,
    InputRefDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuFaInputComponent,
    InputRefDirective
  ]
})
export class InputCompModule { }
