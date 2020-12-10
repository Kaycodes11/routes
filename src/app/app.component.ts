import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/guards/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  constructor(private authService: AuthService) {}
  ngOnInit() {}

  onLogin() {
    this.authService.login();
  }
  onLogOut() {
    this.authService.logOut();
  }
}
