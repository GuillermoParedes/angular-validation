import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { getValidationMessage } from '../validator';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() form!: FormGroup;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() formName: string = '';
  @Input() type: string = 'text';

  get isInvalidField(): boolean {
    return (this.form.get(this.formName)?.touched && !this.form.get(this.formName)?.valid) as boolean;
  }

  get getErrorMessage(): string {
    const error = this.form.get(this.formName)?.errors;
    return error ? getValidationMessage(error) : '';
  }
}
