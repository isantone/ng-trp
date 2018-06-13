import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

const REG_TEXT = 'Нет аккаунта? Зарегистрироваться!';
const LOG_TEXT = 'Уже есть аккаунт? Войти!';

@Component({
  selector: 'trp-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  loginValue: string;
  passwordValue: string;
  nameValue: string;
  ageValue: string;
  sexValue: string;

  regMode = false;

  authText: string = REG_TEXT;
  authBtnText: string = 'Войти';

  @Output() loggedIn = new EventEmitter<object>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onAuthSwitcherClick($event) {
    $event.preventDefault();

    this.regMode = !this.regMode;

    this.authText    = this.regMode ? LOG_TEXT : REG_TEXT;
    this.authBtnText = this.regMode ? 'Зарегистрироваться' : 'Войти';
  }

  authUser() {
    // TO-DO IMPLEMENT PASSWORD CHECKING
    if (this.regMode) {
      // return this.dataService.register(this.loginValue, this.passwordValue, this.nameValue, this.ageValue, this.sexValue)
      return this.dataService.register(this.loginValue, this.passwordValue)
        .subscribe((loggedUser) => {
          if (loggedUser) {
            this.loggedIn.emit(loggedUser);
          }
        });
    }

    return this.dataService.login(this.loginValue)
      .subscribe((loggedUser) => {
        if (loggedUser) {
          this.loggedIn.emit(loggedUser);
        }
      });
  }

  // registerUser() {
  //   // TO-DO IMPLEMENT PASSWORD CHECKING
  //   this.dataService.register(this.loginValue)
  //     .subscribe((loggedUser) => {
  //       if (loggedUser) {
  //         this.loggedIn.emit(loggedUser);
  //       }
  //     });
  // }
}
