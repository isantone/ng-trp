import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSliderModule
} from '@angular/material';

import { DragulaModule } from "ng2-dragula";

import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth/auth-form.component';
import { HeaderComponent } from './common/header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { YmapComponent } from './ymap/ymap.component';
import { RecommendationResultsComponent } from './recommendation-results/recommendation-results.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    HeaderComponent,
    RecommendationResultsComponent,
    UserProfileComponent,
    YmapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    DragulaModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
