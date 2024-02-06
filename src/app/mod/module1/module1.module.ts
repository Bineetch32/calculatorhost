import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from './comp2/comp2.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Comp2Component
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [Comp2Component]
})
export class Module1Module { }
