import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  data: any = {
    email: 'user01@example.com',
    password: '123',
    isRememberMe: true
  };

  constructor() { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

}
