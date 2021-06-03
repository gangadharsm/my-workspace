import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { EllipsisPipe } from './ellipsis.pipe';



@NgModule({
  declarations: [
    MyLibComponent,
    EllipsisPipe
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    EllipsisPipe
  ]
})
export class MyLibModule { }
