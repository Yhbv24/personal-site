import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  homeActive: boolean = false;
  workActive: boolean = false;
  photoActive: boolean = false;
  aboutActive: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.isPageActive();
  }

  isPageActive() {
    switch (window.location.href) {
      case 'https://ashlaidlaw.com/':
        this.homeActive = true;
      break;

      case 'https://ashlaidlaw.com/work':
        this.workActive = true;
      break;

      case 'https://ashlaidlaw.com/photography':
        this.photoActive = true;
      break;

      case 'https://ashlaidlaw.com/about':
        this.aboutActive = true;
      break;
    }
  }

  isHomeActive() {
    if (this.homeActive) {
      this.homeActive = false;
    } else {
      this.homeActive = true;
      this.workActive = false;
      this.photoActive = false;
      this.aboutActive = false;
    }
  }

  isWorkActive() {
    if (this.workActive) {
      this.workActive = false;
    } else {
      this.homeActive = false;
      this.workActive = true;
      this.photoActive = false;
      this.aboutActive = false;
    }
  }

  isPhotoActive() {
    if (this.photoActive) {
      this.photoActive = false;
    } else {
      this.homeActive = false;
      this.workActive = false;
      this.photoActive = true;
      this.aboutActive = false;
    }
  }

  isAboutActive() {
    if (this.aboutActive) {
      this.aboutActive = false;
    } else {
      this.homeActive = false;
      this.workActive = false;
      this.photoActive = false;
      this.aboutActive = true;
    }
  }

}
