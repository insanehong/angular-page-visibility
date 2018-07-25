import {PageVisibilityService} from './page-visibility.service';
import {NgxPageVisibilityModule} from './ngx-page-visibility.module';
import { ReflectiveInjector, Provider } from '@angular/core';

const providers : Provider[] = [ PageVisibilityService ];
const injector = ReflectiveInjector.resolveAndCreate( providers );
const pageVisibilityService = injector.get( PageVisibilityService );

export function OnPageVisibilityChange () : MethodDecorator {
  return function ( target : any , propertyKey : string , descriptor : PropertyDescriptor ) {
    pageVisibilityService.$onPageVisibilityChange.subscribe( ( isPageVisible : boolean )=> {
      target[ propertyKey ].apply( this , [ isPageVisible ] );
    } );
  };
}

export function OnPageHidden () : MethodDecorator {
  return function ( target : any , propertyKey : string , descriptor : PropertyDescriptor ) {
    pageVisibilityService.$onPageHidden.subscribe( ()=> {
      target[ propertyKey ].apply( this );
    } );
  };
}

export function OnPageVisible () : MethodDecorator {
  return function ( target : any , propertyKey : string , descriptor : PropertyDescriptor ) {
    pageVisibilityService.$onPageVisible.subscribe( ()=> {
      target[ propertyKey ].apply( this );
    } );
  };
}
