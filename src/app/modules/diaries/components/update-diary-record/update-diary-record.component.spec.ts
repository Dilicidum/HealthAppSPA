import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDiaryRecordComponent } from './update-diary-record.component';

describe('UpdateDiaryRecordComponent', () => {
  let component: UpdateDiaryRecordComponent;
  let fixture: ComponentFixture<UpdateDiaryRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDiaryRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDiaryRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
