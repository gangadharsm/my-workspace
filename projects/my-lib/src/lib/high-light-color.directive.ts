import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[libHighLightColor]'
})
export class HighLightColorDirective {

  @HostBinding('style.color') colorKey = 'yellow';
  @HostBinding('style.backgroundColor') bgColorKey = 'olive';

  @HostListener('mouseenter') onEnter() {
    this.colorKey = 'white';
    this.bgColorKey = 'blue';
  }

  @HostListener('mouseleave') onLeave() {
    this.colorKey = 'yellow';
    this.bgColorKey = 'olive';
  }

}
