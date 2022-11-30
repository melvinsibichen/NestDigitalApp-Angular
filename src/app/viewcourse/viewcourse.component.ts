import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-course',
  templateUrl: './view-all-course.component.html',
  styleUrls: ['./view-all-course.component.css']
})
export class ViewAllCourseComponent {
  constructor(private api:ApiService){
      api.fetchCourseData().subscribe(
        (response)=>{
          this.courses = response
        }
      )
  }
  courses:any = []
}