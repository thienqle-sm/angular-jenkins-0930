import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  //Default test cases
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-unit-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-unit-test');
  });

  // Adding test cases
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-unit-test app is running ...');
  });

  
  it('1. Should have the message `This is a content!`',() => {
    console.log('TC1. Should have the message `This is a content!`')
    
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    console.log(app.content)
    expect(app.content).toBe('This is a content!'); 
  });

  it('2. Should have button tag of `Click me Button!`',() => {
    console.log('TC2. Should have button tag of `Click me Button!`')
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const debug = fixture.debugElement;
    fixture.detectChanges();
    expect(debug.query(By.css('button')).nativeElement.innerText).toBe('Click me!');
  });

  it('3. should toggle the boolean',() => {
    console.log('TC3. should toggle the boolean')
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.hide).toBeTruthy();
    console.log(app.hide)
    app.toggle();
    console.log(app.hide)
    expect(app.hide).toBeFalsy();
  });
  
});
