import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2DragDropModule} from "../index";
import {AppComponent} from './app.component';

@NgModule({
  imports: [BrowserModule, Ng2DragDropModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
