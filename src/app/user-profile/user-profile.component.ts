import { Component, Input, OnInit } from '@angular/core';

import { findUserById, findUserByProperty } from '../../db/users';

@Component({
  selector: 'trp-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() lkActive: boolean;
  objectKeys = Object.keys;

  user = findUserById(2);
  // getLkVisibility = getLkVisibility;

  constructor() { }

  ngOnInit() {
  }

}
