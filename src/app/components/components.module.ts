import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from '../layout/layout.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './form/input/input.component';
import { ImageValidationDirective } from './image-validation.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    TableComponent,
    ButtonComponent,
    SearchComponent,
    FormComponent,
    InputComponent,
    ImageValidationDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    TableComponent,
    ButtonComponent,
    SearchComponent,
    FormComponent,
    ImageValidationDirective
  ]
})
export class ComponentsModule { }
