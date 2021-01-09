import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Questions } from 'src/app/model/questions';
import { ExamService } from 'src/app/services/exam.service';
import { questions } from 'src/app/jsondata/question.json';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {
  questionSet: Questions[];
  currentQuestion: Questions;
  currentIndex: number;
  selectedAnswer: string;

  constructor(
    private fb: FormBuilder,
    private examservice: ExamService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getQuestionData('examId');
  }

  getQuestionData(examId: string) {

    console.log('hard coded');
    this.questionSet = JSON.parse(JSON.stringify(questions));
    this.currentQuestion = this.questionSet[0];
    this.currentIndex = 0;

    // this.examservice.getExamQuestions(examId).subscribe(
    //   (questions: Questions[]) => {
    //     this.questionSet = questions;
    //     this.currentQuestion = questions[0];
    //     this.currentIndex = 0;
    //     console.log('questions');
    //     console.log(this.questions);
    //   });
  }

  onNext() {
    if (this.currentIndex <= this.questionSet.length) {
      this.currentIndex = this.currentIndex + 1;
      this.currentQuestion = this.questionSet[this.currentIndex];
    }
  }

}
