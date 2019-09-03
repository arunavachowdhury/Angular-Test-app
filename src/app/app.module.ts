import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { PanelComponent } from './panel/panel.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { HttpClientModule } from "@angular/common/http";
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    PanelComponent,
    CoursedetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
