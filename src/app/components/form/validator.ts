import { FormControl, ValidationErrors } from '@angular/forms';

export const validateFutureDateFromToday = (control: FormControl) => {

  if (!control.value) return null

  const dateControl: number[] = control.value.split('-').map(Number);

  const dateNow = new Date();
  const date = new Date(dateControl[0], dateControl[1] - 1, dateControl[2]);

  dateNow.setHours(0, 0, 0, 0);

  if (dateNow <= date) return null;

  return { noDateInFuture: true };
}

const validateMessages: ValidationErrors = {
  idExists: 'You can not repeat ID',
  required: 'The field is required',
  minlength: ({ requiredLength }: { requiredLength: number }) => `The field needs min length of ${requiredLength} character(s)`,
  maxlength: ({ requiredLength }: { requiredLength: number }) => `The field needs max length og ${requiredLength} character(s)`,

  other: '',
}

export const getValidationMessage = (error: ValidationErrors): string => {
  const errorKeys = Object.keys(error);
  let messages: string = '';

  errorKeys.forEach((errorName: string) => {
    const validationMessage = validateMessages[errorName];
    if (typeof validationMessage === 'function') {
      messages = validationMessage(error[errorName]);
    } else {
      messages = validationMessage || validateMessages['other'];
    }
  });
  console.log('messages', messages)
  return messages;
}
