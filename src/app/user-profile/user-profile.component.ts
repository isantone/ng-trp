import { Component, OnInit } from '@angular/core';

import { findUserById, findUserByProperty } from '../../db/users';
import { getLkVisibility } from '../../js/route';

@Component({
  selector: 'trp-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  objectKeys = Object.keys;

  user = findUserById(2);
  getLkVisibility = getLkVisibility;

  constructor() { }

  ngOnInit() {
  }

}
