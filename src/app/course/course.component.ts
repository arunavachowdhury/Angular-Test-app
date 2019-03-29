import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-component',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
@Input() isFavorite: boolean;
@Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }

}
