import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  bobRossHover: boolean = true;
  hockeyTeamHover: boolean = false;
  shoeStoreHover: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  bobRossToggle() {
    if (this.bobRossHover) {
      this.bobRossHover = false;
    } else {
      this.bobRossHover = true;
      this.hockeyTeamHover = false;
      this.shoeStoreHover = false;
    }
  }

  hockeyTeamToggle() {
    if (this.hockeyTeamHover) {
      this.hockeyTeamHover = false;
    } else {
      this.hockeyTeamHover = true;
      this.bobRossHover = false;
      this.shoeStoreHover = false;
    }
  }

  shoeStoreToggle() {
    if (this.shoeStoreHover) {
      this.shoeStoreHover = false;
    } else {
      this.shoeStoreHover = true;
      this.bobRossHover = false;
      this.hockeyTeamHover = false;
    }
  }

}
