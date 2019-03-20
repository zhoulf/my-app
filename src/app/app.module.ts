import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectexComponent } from './selectex/selectex.component';

import { HighlightDirective } from './directive/highlight.directive';
import { SelectexDirective } from './directive/selectex.directive';

@NgModule({
  declarations: [
    AppComponent,
    SelectexComponent,
    HighlightDirective,
    SelectexDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
