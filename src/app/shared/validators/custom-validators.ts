import { FormControl } from '@angular/forms';

export class CustomValidators {

  static required(control: FormControl):  any {
    return control.value && control.value.toString().trim() !== '' ? null : {
      required: true
    };
  }

}
