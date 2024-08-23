import { Injectable } from "@angular/core";
import { DiariesModule } from "../diaries.module";
import { HttpClient } from "@angular/common/http";
import { DayRecord } from "../models/dayRecord";
import { URLs } from "../models/URLs";


@Injectable()

export class CreateDiaryRecordService{
  constructor(private http: HttpClient) { }

  recordDay(dayRecord: DayRecord) {
    return this.http.post(URLs.recordDay, dayRecord);
  }
}
