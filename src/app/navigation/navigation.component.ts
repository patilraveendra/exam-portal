import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from '../services/authguard-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isTeacher$: Observable<boolean>;
  isStudent$: Observable<boolean>;
  isAdmin$: Observable<boolean>;

  role: string;

  constructor(private authService: AuthguardServiceService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isStudent$ = this.authService.isStudentRole;
    this.isTeacher$ = this.authService.isTeacherRole;
    console.log('navigation');
    console.log(this.isStudent$);
    console.log(this.isTeacher$);
  }

  onLogout() {
    this.authService.logout();
  }
}