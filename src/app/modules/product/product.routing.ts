import { NgModule } from '@angular/core';
import { BrowserComponent } from './browser/browser.component';
import { NewComponent } from './new/new.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BrowserComponent },
  { path: 'new', component: NewComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
