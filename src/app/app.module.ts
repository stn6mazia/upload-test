import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesignTestModule } from './design-test/design-test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DesignTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
