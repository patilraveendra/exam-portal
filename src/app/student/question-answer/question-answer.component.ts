import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Questions } from 'src/app/model/questions';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {
  questions: Questions[];
  currentQuestion: Questions;
  currentIndex: number;


  constructor(
    private fb: FormBuilder,
    private examservice: ExamService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getQuestionData('examId');
  }

  getQuestionData(examId: string) {
    
    this.examservice.getExamQuestions(examId).subscribe(
      (questions: Questions[]) => {
        this.questions = questions;
        this.currentQuestion = questions[0];
        this.currentIndex = 0;
        console.log('questions');
        console.log(this.questions);
      });
  }

  onNext() {
    if (this.currentIndex <= this.questions.length) {
      this.currentIndex = this.currentIndex + 1;
      this.currentQuestion = this.questions[this.currentIndex];
    }
  }

}
