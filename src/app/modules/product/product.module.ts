import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserComponent } from './browser/browser.component';
import { NewComponent } from './new/new.component';
import { ProductRoutingModule } from './product.routing';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    BrowserComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ComponentsModule
  ]
})
export class ProductModule { }
