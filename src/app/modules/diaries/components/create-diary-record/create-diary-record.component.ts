import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateDiaryRecordService } from '../../services/create-diary-record.service';
import { DayRecord } from '../../models/dayRecord';
import { BehaviorSubject, Subscription } from 'rxjs';

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
      date: new FormControl(new Date(), [Validators.required])
    })
    this.pickTodaysDateisEnabled$.next(true);
    this.pickTodaysDateisEnabled$.subscribe(isEnabled => {
      if (isEnabled) {
        this.date.setValue(new Date());
        this.date.disable();
      } else {
        this.date.enable();
        this.date.reset();
      }
    })
  }

  subscription: Subscription;

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let model = {
      description: this.description.value,
      shortDescription: this.shortDescription.value,
      date: this.date.value
    } as DayRecord

    this.subscription = this.createDiaryRecordService.recordDay(model).subscribe(
      (err) => {
        console.log('error ')
     }
    )
  }

  pickTodaysDateisEnabled$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  pickTodaysDate() {
    console.log('here')
    this.pickTodaysDateisEnabled$.next(!this.pickTodaysDateisEnabled$.value)

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
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
