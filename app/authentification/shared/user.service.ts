import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

import { User } from './user.model';
import { Subject }    from 'rxjs/Subject'

@Injectable()
export class UserService {

  currentUser: string = '';
  currentUserChange: Subject<string> = new Subject<string>();
  currentUserChange$ = this.currentUserChange.asObservable();

  // Add the user among the users list into the localStorage if it doesn't already exist.
  create(newUser: User): Promise<any> {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find((user: any) => user.username === newUser.username))
      return Promise.reject('Username already used !');

    newUser.password = btoa(newUser.password);
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    this.currentUser = `${newUser.firstName} ${newUser.lastName}`;
    this.currentUserChange.next(this.currentUser);

    return Promise.resolve();
  }

  // Log a user if the username and the password is matching with a user in localstorage
  login(username: string, password: string): Promise<any> {

    let users = JSON.parse(localStorage.getItem('users')) || [];

    let userInLocalStorage = users.find((user: any) => user.username === username);

    if (!userInLocalStorage || (userInLocalStorage.password !== btoa(password)))
      return Promise.reject('Username or password is wrong !');

    this.currentUser = `${userInLocalStorage.firstName} ${userInLocalStorage.lastName}`;
    this.currentUserChange.next(this.currentUser);

    return Promise.resolve();
  }

  logout() {
    this.currentUser = '';
    this.currentUserChange.next(this.currentUser);
  }

}
