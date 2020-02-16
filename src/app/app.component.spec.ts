import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {AuFaInputComponent} from './lib/au-fa-input/au-fa-input.component';
import {InputRefDirective} from './lib/directives/input-ref.directive';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let emailDebugElement : DebugElement
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        AuFaInputComponent,
        InputRefDirective
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    debugElement = fixture.debugElement;
    emailDebugElement = debugElement.query(By.css('#email-input'));
    fixture.detectChanges();

  });

  it('should create the app', async () => {
    expect(component).toBeTruthy();
  });

  it('should create a font awesome email input', async () => {
   expect(emailDebugElement).toBeTruthy();

  });

  it('should include the correct email icon inside the email input', async () => {
    console.log(emailDebugElement.nativeElement.outerHTML);

    expect(emailDebugElement.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
  });

  it('should have projected the correct test input inside the email field', async () => {
    expect(emailDebugElement.query(By.css('input.test-input'))).toBeTruthy();
  });


});
