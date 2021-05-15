import { Component, OnInit } from '@angular/core';
interface Amt {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  value: any
  min: number = 100000
  max: number = 300000
  amt: Amt[] = [
    { value: '5 Months-0', viewValue: '5 Months' },
    { value: '4 Months-1', viewValue: '4 Months' },
    { value: '3 Months-2', viewValue: '3 Months' }
  ];

  constructor() { 
    this.value = this.min
  }

  ngOnInit() {
  }

}
