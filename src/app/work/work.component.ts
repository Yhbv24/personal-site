import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  bobRossHover: boolean = false;
  hockeyTeamHover: boolean = false;
  shoeStoreHover: boolean = false;
  laptopHover: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  bobRossToggle() {
    if (!this.bobRossHover) {
      this.bobRossHover = true;
      this.laptopHover = false;
      this.hockeyTeamHover = false;
      this.shoeStoreHover = false;
    } else {
      this.bobRossHover = false;
    }
  }

  hockeyTeamToggle() {
    if (!this.hockeyTeamHover) {
      this.hockeyTeamHover = true;
      this.bobRossHover = false;
      this.laptopHover = false;
      this.shoeStoreHover = false;
    } else {
      this.hockeyTeamHover = false;
    }
  }

  shoeStoreToggle() {
    if (!this.shoeStoreHover) {
      this.shoeStoreHover = true;
      this.laptopHover = false;
      this.bobRossHover = false;
      this.hockeyTeamHover = false;
    } else {
      this.shoeStoreHover = false;
    }
  }

}
