import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiaryRecordComponent } from './create-diary-record.component';

describe('CreateDiaryRecordComponent', () => {
  let component: CreateDiaryRecordComponent;
  let fixture: ComponentFixture<CreateDiaryRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDiaryRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDiaryRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
