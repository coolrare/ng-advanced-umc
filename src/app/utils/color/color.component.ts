import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  name = '';
  type = 0;

  pageNo = 1;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.type = +this.route.snapshot.paramMap.get('type');
    // this.name = this.route.snapshot.queryParamMap.get('name');

    this.route.paramMap.subscribe((param) => {
      this.type = +param.get('type');
    });
    this.route.queryParamMap.subscribe((param) => {
      this.name = param.get('name');
      this.pageNo = +param.get('pageNo');
    });

  }

  nextPage() {
    var nextPage = this.pageNo + 1;
    this.router.navigate(['/utils/color/1'], {
      queryParamsHandling: 'merge',
      queryParams: {
        pageNo: nextPage
      }
    })
  }

}
