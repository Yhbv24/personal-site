import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('loadHello', [
      transition('void => *', [
        animate(500, keyframes([
          style({opacity: 0}),
          style({opacity: 1}),
        ]))
      ])
    ])
  ],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
