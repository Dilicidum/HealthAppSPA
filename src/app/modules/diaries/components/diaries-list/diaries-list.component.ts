import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { DayRecord } from '../../models/dayRecord';
import { DiaryRecordService } from '../../services/diary-record.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diaries-list',
  templateUrl: './diaries-list.component.html',
  standalone: true,
  imports: [AgGridAngular,CommonModule],
  styleUrls: ['./diaries-list.component.scss']
})
export class DiariesListComponent implements OnInit {

  rowData: DayRecord[] = [

  ];
  themeClass =
        "ag-theme-quartz-dark";
   defaultColDef: ColDef = {
        flex: 1,
    };
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "description" },
    { field: "shortDescription" },
    { field: "date" },
  ];

  constructor(public diaryService: DiaryRecordService) { }

  ngOnInit(): void {
    this.diaryService.getDiaryRecords().subscribe(data => {
      this.rowData = data;
    })
  }

}
