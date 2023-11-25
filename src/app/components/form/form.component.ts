import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() title: string = '';
  @Input() schema: any;
  @Input() initialValues?: any;
  @Input() returnToBack: string = '/'
  @Output() onSubmit = new EventEmitter<any>();


  formSchema: any;

  constructor(private readonly fb: FormBuilder) {}


  ngOnInit() {
    this.generateForm()
  }

  generateForm() {

    console.log('generateform', this)

    const objFormGroup:any = {};

    this.schema.forEach((element: any) => {
      console.log('element', element)
      // objFormGroup[element.property] = ['', ]
      const validations = this.getValidationInput(element)
      if(validations.length > 0) {
        objFormGroup[element.property] = [null, validations]
      }
    });
    this.formSchema = this.fb.group(objFormGroup)
  }

  getValidationInput(inputElement: any) {
    const validation: any = [];

    inputElement.validations.forEach((element: any) => {
      
      if(element.required) {
        validation.push(Validators.required)
      }
      if(element.minLength && element.minLength > 0) {
        validation.push(Validators.minLength(element.minLength))
      }
      if(element.maxLength && element.maxLength > 0) {
        validation.push(Validators.maxLength(element.maxLength))
      }
    });

    return validation;

  }

  onSave() {
    console.log('resonSavet form')
  }

  resetForm() {
    console.log('reset form')
    this.formSchema.reset();
  }
}
