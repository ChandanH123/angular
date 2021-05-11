import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMA';

  private roles: string[] = [];
  isLoggedIn = false;
  showEmployeeBoard = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  id?: any;
  res = true;

  constructor(public router: Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showEmployeeBoard = this.roles.includes('ROLE_EMPLOYEE');
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
      this.id=user.id;
    }
  }



  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
