import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordComplexityValidator } from '../password-complexity.directive';
import { ValidatePasswordComplexity } from '../shared/ValidatePasswordComplexity';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  data: any = {
    email: 'user02@example.com',
    password: '123123',
    isRememberMe: true
  };

  form: FormGroup;

  constructor(private fb: FormBuilder, private pcv: PasswordComplexityValidator) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      email: this.fb.control('', {
        validators: [
          Validators.required,
          Validators.email,
          Validators.minLength(5)
        ],
        updateOn: 'change'
      }),
      password: this.fb.control('', {
        validators: [
          Validators.required,
          this.pcv.validate
        ],
        updateOn: 'change'
      }),
      isRememberMe: this.fb.control(true)
    });

    this.doReset();
  }

  doReset() {
    this.form.reset(this.data);
    // this.form.setValue(this.data);
    // this.form.patchValue(this.data);
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  doSubmit() {
    if (this.form.valid) {
      alert('表單送出');
    }
  }

  fc(name: string) {
    return this.form.get(name) as FormControl;
  }

  fg(name: string) {
    return this.form.get(name) as FormGroup;
  }

  fa(name: string) {
    return this.form.get(name) as FormArray;
  }

}
