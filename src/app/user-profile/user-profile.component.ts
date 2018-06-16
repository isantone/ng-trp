import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { RecommendationsService } from '../services/recommendations.service';

@Component({
  selector: 'trp-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() lkActive: boolean;

  users;
  places;

  user;

  constructor(
    private dataService: DataService,
    private recommendations: RecommendationsService
  ) { }

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

        this.recommendations.updateRecommendations(this.user.login);
      });
  }
}

