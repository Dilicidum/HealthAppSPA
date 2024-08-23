import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateDiaryRecordService } from '../../services/create-diary-record.service';
import { DayRecord } from '../../models/dayRecord';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-diary-record',
  templateUrl: './create-diary-record.component.html',
  styleUrls: ['./create-diary-record.component.scss']
})
export class CreateDiaryRecordComponent implements OnInit, OnDestroy {

  form: FormGroup

  constructor(private createDiaryRecordService: CreateDiaryRecordService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      shortDescription: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      date: new FormControl('', [Validators.required])
    })
  }

  subscription: Subscription;

  onSubmit() {
    let model = {
      description: this.description.value,
      shortDescription: this.shortDescription.value
    } as DayRecord

    this.subscription = this.createDiaryRecordService.recordDay(model).subscribe()
  }

  pickTodaysDate(isEnabled: boolean) {
    if (isEnabled) {
      this.date.setValue(Date.now);
      this.date.disable();
    } else {
      this.date.reset();
    }
  }

  get description(): AbstractControl {
    return this.form.get('description')
  }

  get shortDescription(): AbstractControl{
    return this.form.get('shortDescription')
  }

  get date(): AbstractControl{
    return this.form.get('date')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
