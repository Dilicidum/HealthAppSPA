import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription, switchMap } from 'rxjs';
import { DayRecord } from '../../models/dayRecord';
import { DiaryRecordService } from '../../services/diary-record.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-update-diary-record',
  templateUrl: './update-diary-record.component.html',
  styleUrls: ['./update-diary-record.component.scss']
})
export class UpdateDiaryRecordComponent implements OnInit {
  subscription: Subscription;
  form: FormGroup
  dateCreated: Date;
  recordId: number;
  constructor(private createDiaryRecordService: DiaryRecordService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      shortDescription: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      date: new FormControl({value:null, disabled:true}, [Validators.required])
    })
    this.route.paramMap.pipe(switchMap(params => {
      this.recordId = Number.parseInt(params.get('id'));

      return this.createDiaryRecordService.getDiaryRecordById(this.recordId)
    })).subscribe(dayRecord => {
      this.initForm(dayRecord)
    });
  }

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

  private initForm(model: DayRecord) {
    if (!model) return;

    this.description.setValue(model.description)
    this.shortDescription.setValue(model.shortDescription)
    this.date.setValue(model.date)

    this.dateCreated = model.date
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
