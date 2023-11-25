import { Component } from '@angular/core';
import { SchemaProduct } from '../product.schema';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  schemaForm = SchemaProduct;
}
