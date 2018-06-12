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

  user: any = users[0];

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

var users = [
  {
    "login": "ivan",
    "password": "0000",
    "name": "Иван",
    "info": [
      {
        "name": "Возраст",
        "value": "22"
      },
      {
        "name": "Пол",
        "value": "Мужской"
      }
    ],
    "places": {
      "restrict": [
        "Ufa",
        "Lipetzk"
      ],
      "fav": [
        "Kazan",
        "Ekaterinburg"
      ]
    },
    "preferences": [
      {
        "id": "history",
        "name": "История",
        "value": 9
      },
      {
        "id": "architecture",
        "name": "Ахитектура",
        "value": 9
      },
      {
        "id": "nature",
        "name": "Природа",
        "value": 4
      },
      {
        "id": "food",
        "name": "Еда",
        "value": 7
      },
      {
        "id": "modern",
        "name": "Модерн",
        "value": 10
      },
      {
        "id": "culture",
        "name": "Культура",
        "value": 7
      },
      {
        "id": "water",
        "name": "Пляжный отдых",
        "value": 1
      },
      {
        "id": "active",
        "name": "Активный отдых",
        "value": 8
      }
    ]
  },
  {
    "login": "petr",
    "password": "1111",
    "name": "Петр",
    "info": [
      {
        "name": "Возраст",
        "value": "24"
      },
      {
        "name": "Пол",
        "value": "Мужской"
      }
    ],
    "places": {
      "restrict": [
        "Kazan"
      ],
      "fav": [
        "Moscow"
      ]
    },
    "preferences": [
      {
        "id": "history",
        "name": "История",
        "value": 1
      },
      {
        "id": "architecture",
        "name": "Ахитектура",
        "value": 7
      },
      {
        "id": "nature",
        "name": "Природа",
        "value": 9
      },
      {
        "id": "food",
        "name": "Еда",
        "value": 5
      },
      {
        "id": "modern",
        "name": "Модерн",
        "value": 7
      },
      {
        "id": "culture",
        "name": "Культура",
        "value": 3
      },
      {
        "id": "water",
        "name": "Пляжный отдых",
        "value": 10
      },
      {
        "id": "active",
        "name": "Активный отдых",
        "value": 10
      }
    ]
  }
];
