import { Injectable } from "@angular/core";
import { DiariesModule } from "../diaries.module";
import { HttpClient } from "@angular/common/http";
import { DayRecord } from "../models/dayRecord";
import { URLs } from "../models/URLs";
import { Observable } from "rxjs";


@Injectable()

export class DiaryRecordService{
  constructor(private http: HttpClient) { }

  recordDay(dayRecord: DayRecord) {
    return this.http.post(URLs.recordDay, dayRecord);
  }

  getDiaryRecords(): Observable<DayRecord[]> {
    return this.http.get<DayRecord[]>(URLs.recordDay);
  }

  getDiaryRecordById(id: number): Observable<DayRecord> {
    return this.http.get<DayRecord>(URLs.getDiaryRecordById(id));
  }
}
