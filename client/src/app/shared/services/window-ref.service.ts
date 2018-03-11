import { Injectable } from '@angular/core';

// return the global native browser window object
function _window() : any {
   return window;
}

@Injectable()
export class WindowRefService {

  constructor() { }

  /*
  get the native window
  */
  get nativeWindow() : any {
      return _window();
   }



}
