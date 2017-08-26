import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appWindow]'
})
export class WindowDirective {

  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', '#fff');
    renderer.setElementStyle(el.nativeElement, 'color', 'gray');
    //renderer.setElementStyle(el.nativeElement, 'height', '120px');
    //alert( el.nativeElement.clientHeight);
  }


}
