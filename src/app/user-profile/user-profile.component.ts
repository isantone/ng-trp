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

    // setTimeout(() => {
    this.dataService.getUser('petr')
      .subscribe((data) => {
        this.user = data;

        console.log('User:', this.user);
    });
    // }, 4000);

    // const user = {
    //   "login": "petr",
    //   "password": "1111",
    //   "name": "Петр Петров",
    //   "info": {
    //     "age": 24,
    //     "sex": "male"
    //   },
    //   "places": {
    //     "restrict": [
    //       "Kazan",
    //     ],
    //     "fav": [
    //       "Moscow",
    //     ]
    //   },
    //   "preferences": [
    //     {
    //       "architecture": 1,
    //       "water":        4,
    //       "modern":      10,
    //       "people":       1
    //     }
    //   ]
    // };

    // this.dataService.addUser(user)
    //   .subscribe(user => console.warn(user));
  }

  saveLk() {
    this.dataService.sendLk(this.user.login, this.user.preferences)
      .subscribe((response) => {
        this.user = response;
        console.log('Updated user', this.user);
      });
  }

}
