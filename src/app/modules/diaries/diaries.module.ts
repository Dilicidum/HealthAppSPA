import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateDiaryRecordComponent } from './components/create-diary-record/create-diary-record.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreateDiaryRecordService } from './services/create-diary-record.service';

const ROUTES: Routes = [
  { path: '',  component: CreateDiaryRecordComponent}
];

@NgModule({
  declarations: [
    CreateDiaryRecordComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule
  ],
  providers: [
    CreateDiaryRecordService
  ]
})
export class DiariesModule { }
