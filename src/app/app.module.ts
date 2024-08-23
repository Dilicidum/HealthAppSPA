import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DiariesModule } from './modules/diaries/diaries.module';
import { CreateDiaryRecordComponent } from './modules/diaries/components/create-diary-record/create-diary-record.component';

const ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'diary',  loadChildren: () => import('./modules/diaries/diaries.module').then(m=>m.DiariesModule)}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
