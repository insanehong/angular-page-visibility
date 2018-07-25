import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxPageVisibilityModule } from "./module/ngx-page-visibility/ngx-page-visibility.module";


@NgModule( {
  declarations : [
    AppComponent
  ] ,
  imports : [
    BrowserModule ,
    NgxPageVisibilityModule
  ] ,
  providers : [] ,
  bootstrap : [ AppComponent ]
} )
export class AppModule {
}
