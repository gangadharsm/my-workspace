import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { EllipsisPipe } from './ellipsis.pipe';
import { HighLightColorDirective } from './high-light-color.directive';



@NgModule({
  declarations: [
    MyLibComponent,
    EllipsisPipe,
    HighLightColorDirective
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    EllipsisPipe,
    HighLightColorDirective
  ]
})
export class MyLibModule { }
