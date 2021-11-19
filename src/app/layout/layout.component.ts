import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  pageId = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
