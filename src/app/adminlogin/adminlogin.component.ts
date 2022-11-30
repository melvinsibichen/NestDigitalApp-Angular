import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  constructor(private route:Router){}
  username=""
  password=""
  readValues=()=>{
    if(this.username=="admin"&&this.password=="nestdigital"){
      this.route.navigate(["/viewallcourse"])
    }else{
      alert("Invalid Credentials")
    }
  }
}