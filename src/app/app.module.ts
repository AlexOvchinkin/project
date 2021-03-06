import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {TrainingModule} from './training/training.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import { MainBarComponent } from './main-bar/main-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TrainingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
