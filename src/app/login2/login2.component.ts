import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      email: this.fb.control('user02@example.com', {
        validators: [
          Validators.required,
          Validators.email
        ],
        updateOn: 'blur'
      }),
      password: this.fb.control('123123', {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      isRememberMe: this.fb.control(true)
    });
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  doSubmit() {
    if (this.form.valid) {
      alert('表單送出');
    }
  }

}
