import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateDiaryRecordComponent } from './components/create-diary-record/create-diary-record.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreateDiaryRecordService } from './services/create-diary-record.service';
import { DiariesListComponent } from './components/diaries-list/diaries-list.component';
import { UpdateDiaryRecordComponent } from './components/update-diary-record/update-diary-record.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'create-record', component: CreateDiaryRecordComponent },
  { path: 'list', component: DiariesListComponent },
  { path: 'update-record', component: UpdateDiaryRecordComponent}
];

@NgModule({
  declarations: [
    CreateDiaryRecordComponent,
    DiariesListComponent,
    UpdateDiaryRecordComponent
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
