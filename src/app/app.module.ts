import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MaterialModule } from './material/material.module';
import 'hammerjs';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserinputComponent } from './userinput/userinput.component';
import { PostsComponent } from './posts/posts.component';
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    WelcomeComponent,
    UserinputComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,BrowserAnimationsModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
