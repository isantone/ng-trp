import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth/auth-form.component';
import { HeaderComponent } from './common/header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { YmapComponent } from './ymap/ymap.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    HeaderComponent,
    UserProfileComponent,
    YmapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
