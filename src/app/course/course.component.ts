import { CourseService } from './../course.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'course-component',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public courses = [];
  @Output() public details : number = 0;

  constructor(private service: CourseService) { }

  ngOnInit() {
    this.service.getCourseList().subscribe(data => this.courses = data);
  }

  detailView(course: Course){
    this.details = course.id;
  }

}
