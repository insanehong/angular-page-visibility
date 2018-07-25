import {Injectable} from '@angular/core';
import { Subject, Observable } from "rxjs";


@Injectable()
export class PageVisibilityService {
  private static HIDDEN : string = "hidden";
  private static MS_HIDDEN : string = "msHidden";
  private static WEB_KIT_HIDDEN : string = "webkitHidden";
  private onPageVisibleSource : Subject<void> = new Subject<void> ();
  /**
   * @deprecated from v4.0.9 use isPageHidden(): void
   */
  private onPageNotVisibleSource : Subject<void> = new Subject<void> ();
  private onPageHiddenSource : Subject<void> = new Subject<void> ();
  private onPageVisibilityChangeSource : Subject<boolean> = new Subject<boolean> ();
  private hidden : string;
  private visibilityChange : string;
  $onPageVisible : Observable<void> = this.onPageVisibleSource.asObservable();
  /**
   * @deprecated from v4.0.9 use $onPageHidden: Observable<void>
   */
  $onPageNotVisible : Observable<void> = this.onPageNotVisibleSource.asObservable();
  $onPageHidden : Observable<void> = this.onPageHiddenSource.asObservable();
  $onPageVisibilityChange : Observable<boolean> = this.onPageVisibilityChangeSource.asObservable();

  constructor () {
    this.init();
    this.listenPageVisibility();
  }

  isPageVisible () : boolean {
    return ! this.isPageHidden();
  };

  isPageHidden () : boolean {
    return document[ this.hidden ];
  }

  /**
   * @deprecated from v4.0.9 use isPageHidden(): void
   */
  isPageNotVisible () : boolean {
    return this.isPageHidden();
  }

  private init () {
    if ( typeof document[ PageVisibilityService.HIDDEN ] !== "undefined" ) { // Opera 12.10 and Firefox 18 and later support
      this.hidden = PageVisibilityService.HIDDEN;
      this.visibilityChange = "visibilitychange";
    }
    else if ( typeof document[ PageVisibilityService.MS_HIDDEN ] !== "undefined" ) {
      this.hidden = PageVisibilityService.MS_HIDDEN;
      this.visibilityChange = "msvisibilitychange";
    } else if ( typeof document[ PageVisibilityService.WEB_KIT_HIDDEN ] !== "undefined" ) {
      this.hidden = PageVisibilityService.WEB_KIT_HIDDEN;
      this.visibilityChange = "webkitvisibilitychange";
    }
  }

  private listenPageVisibility () : void {
    document.addEventListener( this.visibilityChange , () => {
      if ( this.isPageVisible() ) {
        this.onPageVisibilityChangeSource.next( true );
        this.onPageVisibleSource.next();
        return;
      }
      this.onPageVisibilityChangeSource.next( false );
      this.onPageHiddenSource.next();
      this.onPageNotVisibleSource.next();
    } , false );
  }
}
