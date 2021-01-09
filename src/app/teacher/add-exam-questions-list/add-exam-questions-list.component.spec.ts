import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamQuestionsListComponent } from './add-exam-questions-list.component';

describe('AddExamQuestionsListComponent', () => {
  let component: AddExamQuestionsListComponent;
  let fixture: ComponentFixture<AddExamQuestionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExamQuestionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExamQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
