import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { UserService } from '../shared/user.service';
import { User }        from '../shared/user.model';

@Component({
  selector: 'login',
  templateUrl: 'app/authentification/login/login.component.html',
})
export class LoginComponent {

  model: any = {};
  error: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.login(this.model.username, this.model.password).then(() => {
        this.router.navigate(['/product-list']);
      })
      .catch((error: string) => {
        this.error = error;
      });
  }
}
