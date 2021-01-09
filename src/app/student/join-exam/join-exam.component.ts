import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Exam } from 'src/app/model/exam';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-join-exam',
  templateUrl: './join-exam.component.html',
  styleUrls: ['./join-exam.component.scss']
})
export class JoinExamComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private examservice: ExamService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      examId: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('call exam service');

      this.examservice.joinExam(this.form.get('examId').value,
        this.form.get('name').value,
        localStorage.getItem('studentid'))
        .subscribe(
          (exam: Exam) => {
            localStorage.setItem('examid', exam.examId);
            this.router.navigate(['/join-exam-password']);
          });
    }
    this.formSubmitAttempt = true;
  }

}
