import { FormControl } from '@angular/forms';

export function ValidatePasswordComplexity(min: number, max: number) {

  return function (control: FormControl) {
    if (!control.value) {
      return null;
    }
    var re = new RegExp(`^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{${min},${max}}\$`);
    return re.test(control.value) ? null : { PasswordComplexity: true };
  };

}
