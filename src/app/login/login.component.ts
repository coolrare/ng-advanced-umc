import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  data: any = {
    email: '',
    password: '',
    isRememberMe: true
  };

  constructor() { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  doSubmit(form: NgForm) {
    if (form.valid) {
      alert('表單送出');
    }
  }

}
