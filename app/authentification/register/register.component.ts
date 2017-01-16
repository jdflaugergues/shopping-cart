import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { UserService }   from '../shared/user.service';

@Component({
  templateUrl: 'app/authentification/register/register.component.html',
  styleUrls: ['app/authentification/register/register.component.css']
})

export class RegisterComponent {
  model: any = {};
  loading: boolean = false;
  error: string = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .then(() => {
        this.router.navigate(['/product-list']);
      })
      .catch((error: string) => {
        this.error = error;
        this.loading = false;
      });
  }
}
