import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lkActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleLk() {
    this.lkActive = !this.lkActive;
  }
}
