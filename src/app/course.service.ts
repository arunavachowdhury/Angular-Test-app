import { Course } from './course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseDetails } from './models/coursedetails';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _url: string = '/assets/data';

  constructor(private http: HttpClient) { }

  getCourseList(): Observable<Course[]>{
    return this.http.get<Course[]>(this._url+'/courselist.json');
  }

  getCourseDetails(): Observable<CourseDetails[]>{
    return this.http.get<CourseDetails[]>(this._url+'/coursedetails.json');
  }
}
