import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.css']
})
export class EmployeeRegComponent {
  constructor(private route:Router){}
  empid=""
  firstname=""
  lastname=""
  houseno=""
  streetname=""
  pincode=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  parentname=""
  gender=""
  degree=""
  experience=""
  doj=""
  username=""
  password=""
  cpassword=""


  readValues=()=>{
    if(this.password==this.cpassword){
      alert("Register Success")
      this.route.navigate(["/employeelogin"])
    }else{
      alert("Password and confirm password dosen't match")
    }
  }
}