import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/auth/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {

  user: AuthData | null = null;

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit() {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
    }
  }

  logOut() {
    this.authService.logout();
  }

  eliminaAccount(userId:number) {
    this.authService.removeAccount(userId).subscribe(() => {
      console.log("Account eliminato", userId);
    });
    this.authService.logout();
  }
}
