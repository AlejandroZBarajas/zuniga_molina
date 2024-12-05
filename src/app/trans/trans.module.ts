import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformCardComponent } from './components/transform-card/transform-card.component';
import { TransformationPageComponent } from './components/transformation-page/transformation-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TransformCardComponent,
    TransformationPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TransformCardComponent,
    TransformationPageComponent
  ]
})
export class TransModule { }
