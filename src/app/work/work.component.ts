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
  projectContent: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  projectContentToggle() {
    this.projectContent = true;
    this.bobRossHover = false;
    this.hockeyTeamHover = false;
    this.shoeStoreHover = false;
  }

  bobRossToggle() {
    if (!this.bobRossHover) {
      this.bobRossHover = true;
      this. projectContent = false;
    } else {
      this.hockeyTeamHover = false;
      this.shoeStoreHover = false;
      this. projectContent = false;
    }
  }

  hockeyTeamToggle() {
    if (!this.hockeyTeamHover) {
      this.hockeyTeamHover = true;
      this. projectContent = false;
    } else {
      this.bobRossHover = false;
      this.shoeStoreHover = false;
      this. projectContent = false;
    }
  }

  shoeStoreToggle() {
    if (!this.shoeStoreHover) {
      this.shoeStoreHover = true;
      this. projectContent = false;
    } else {
      this.bobRossHover = false;
      this.hockeyTeamHover = false;
      this. projectContent = false;
    }
  }

}
