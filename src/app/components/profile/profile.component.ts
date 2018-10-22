import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  name: any;
  email: any;
  constructor(private user: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.name = currentUser && currentUser.name;
    this.email = currentUser && currentUser.email;

  }

}
