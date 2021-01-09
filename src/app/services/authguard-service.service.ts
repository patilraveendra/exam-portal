import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) { }

  login(user: User) {
    if (user.userName !== '' && user.password !== '') {
      this.loggedIn.next(true);
      if (user.userName === 'student' && user.password === 'student') {
        localStorage.setItem('studentid', '35');
        localStorage.setItem('role', 'student');
        localStorage.setItem('loggedIn', 'true');
        console.log('login service');
      }

      if (user.userName === 'teacher' && user.password === 'teacher') {
        localStorage.setItem('teacherid', '85');
        localStorage.setItem('role', 'teacher');
        localStorage.setItem('loggedIn', 'true');
        console.log('login service');
      }

      this.router.navigate(['/']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
