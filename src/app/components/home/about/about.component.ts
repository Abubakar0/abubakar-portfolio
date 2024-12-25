import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  angularYears: number;
  wordpressYears: number;
  constructor() {}

  // Calculate the years of experience

  ngOnInit(): void {
    let currentYear = new Date().getFullYear();
    let angularStartYear = 2021;
    let wordpressStartYear = 2020;
    this.angularYears = currentYear - angularStartYear;
    this.wordpressYears = currentYear - wordpressStartYear;
  }
}
