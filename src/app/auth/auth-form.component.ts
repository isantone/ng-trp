import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'trp-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  loginValue: string;
  passwordValue: string;

  @Output() loggedIn = new EventEmitter<object>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  loginUser() {
    // TO-DO IMPLEMENT PASSWORD CHECKING
    this.dataService.login(this.loginValue)
      .subscribe((loggedUser) => {
        if (loggedUser) {
          this.loggedIn.emit(loggedUser);
        }
      });
  }
}
