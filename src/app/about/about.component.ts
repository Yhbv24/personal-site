import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('loadAbout', [
      transition('void => *', [
        animate(3000, keyframes([
          style({opacity: 0}),
          style({opacity: 1}),
        ]))
      ])
    ])
  ],
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
