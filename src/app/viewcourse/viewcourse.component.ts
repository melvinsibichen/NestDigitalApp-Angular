import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-course',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
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