import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationGuard } from './authentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JoinExamPasswordComponent } from './student/join-exam-password/join-exam-password.component';
import { JoinExamComponent } from './student/join-exam/join-exam.component';
import { QuestionAnswerComponent } from './student/question-answer/question-answer.component';
import { AddExamQuestionsListComponent } from './teacher/add-exam-questions-list/add-exam-questions-list.component';
import { AddExamQuestionsComponent } from './teacher/add-exam-questions/add-exam-questions.component';
import { AddExamComponent } from './teacher/add-exam/add-exam.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'join-exam', component: JoinExamComponent },
  { path: 'join-exam-password', component: JoinExamPasswordComponent },
  { path: 'exam-question-answer', component: QuestionAnswerComponent },
  { path: 'add-exam', component: AddExamComponent },
  { path: 'add-exam-questions', component: AddExamQuestionsComponent },
  { path: 'add-exam-questions-list', component: AddExamQuestionsListComponent },


  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }