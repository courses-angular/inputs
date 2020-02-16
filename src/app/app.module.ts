import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { InputRefDirective } from './lib/directives/input-ref.directive';
import {InputCompModule} from './lib/input-comp.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputCompModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
