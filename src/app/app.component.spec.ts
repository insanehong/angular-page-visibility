import { TestBed, async } from '@angular/core/testing';
import {AppComponent} from "./app.component";
import {NgxPageVisibilityModule} from "./module/ngx-page-visibility/ngx-page-visibility.module";
declare let beforeEach:any;
declare let expect:any;
declare let describe:any;
declare let it:any;

describe ( 'AppComponent' , () => {
  beforeEach ( async ( () => {
    TestBed.configureTestingModule( {
      declarations : [
        AppComponent
      ] ,
      imports: [NgxPageVisibilityModule]
    } ).compileComponents();
  } ) );
  it ( 'should create the app' , async ( () => {
    const fixture = TestBed.createComponent( AppComponent );
    const app = fixture.debugElement.componentInstance;
    expect ( app ).toBeTruthy();
  } ) );
  it ( `should have as title 'app'` , async ( () => {
    const fixture = TestBed.createComponent( AppComponent );
    const app = fixture.debugElement.componentInstance;
    expect ( app.title ).toEqual( 'app' );
  } ) );
  it ( 'should render title in a h1 tag' , async ( () => {
    const fixture = TestBed.createComponent( AppComponent );
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect ( compiled.querySelector( 'h1' ).textContent ).toContain( 'Welcome to app!' );
  } ) );
} );
