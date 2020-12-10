import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = false;
  constructor() {}

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }

  login() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
