import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from "@angular/material/button";
import { ImageListComponent } from './image-list/image-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxDropzoneModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
