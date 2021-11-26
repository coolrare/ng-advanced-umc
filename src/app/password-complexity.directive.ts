import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[password-complexity][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PasswordComplexityValidator, multi: true }
  ]
})
export class PasswordComplexityValidator implements Validator {
  validate(c: FormControl): { [key: string]: any } {
    if (!c.value) {
      return null;
    }
    var re = new RegExp(`^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}\$`);
    return re.test(c.value) ? null : { PasswordComplexity: true };
  }
}
