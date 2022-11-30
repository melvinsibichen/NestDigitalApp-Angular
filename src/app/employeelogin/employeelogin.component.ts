import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeLoginComponent {
  constructor(private route:Router){}
  empid=""
  password=""

  readValues=()=>{
    if(this.empid=="1122"&&this.password=="12345"){
      this.route.navigate(["/addcourse"])
    }else{
      alert("Not a valid credentials")
    }
  }
}