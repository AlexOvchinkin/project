import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TrainingModule} from './training/training.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TrainingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
