import { FormControl } from '@angular/forms';

export function ValidatePasswordComplexity(control: FormControl) {
  if (!control.value) {
    return null;
  }
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/;
  return re.test(control.value) ? null : { PasswordComplexity: true };
}
