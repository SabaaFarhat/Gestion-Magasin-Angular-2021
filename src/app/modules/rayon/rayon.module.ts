import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RayonRoutingModule } from './rayon-routing.module';
import { AddRayonComponent } from './add-rayon/add-rayon.component';


@NgModule({
  declarations: [
    AddRayonComponent
  ],
  imports: [
    CommonModule,
    RayonRoutingModule
  ]
})
export class RayonModule { }
