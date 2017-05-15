import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  showing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showingToggle() {
    this.showing = true;
  }

}
