import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compound-interest-page',
  template: ` <p>compound-interest-page works!</p> `,

  styles: [],
})
export class CompoundInterestPageComponent implements OnInit {
  myData: String = '';

  ngOnInit() {
    this.genData();
  }

  genData() {
    this.myData = '5';
  }
}
