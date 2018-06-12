import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'trp-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() lkActive: boolean;
  // objectKeys = Object.keys;

  // user = findUserById(2);
  // getLkVisibility = getLkVisibility;

  users;
  places;

  user;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers()
      .subscribe((data) => {
        this.users = data;
        console.log('Users:', this.users);
    });

    this.dataService.getPlaces()
      .subscribe((data) => {
        this.places = data;
        console.log('Places:', this.places);
    });

    // this.dataService.addUser(user)
    //   .subscribe(user => console.warn(user));
  }

  onLoggedIn(loggedUser: object) {
    console.log('Logged In:', loggedUser);
    this.user = loggedUser;
  }

  saveLk() {
    this.dataService.sendLk(this.user.login, this.user.preferences)
      .subscribe((response) => {
        this.user = response;
        console.log('Updated user', this.user);
      });
  }

}
