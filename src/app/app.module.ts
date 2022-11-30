import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllFriendsComponent } from './viewfriends/viewfriends.component';
import { ViewAllCourseComponent } from './view-all-course/view-all-course.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { EmployeeregComponent } from './employeereg/employeereg.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';



const myRoutes:Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutusComponent
  },
  {
    path:"contact",
    component:ContactusComponent
  },
  {
    path:"adminlogin",
    component:AdminloginComponent
  },
  {
    path:"viewallfriends",
    component:ViewAllFriendsComponent
  },
  {
    path:"viewallcourse",
    component:ViewAllCourseComponent
  },
  {
    path:"employeelogin",
    component:EmployeeloginComponent
  },
  {
    path:"addcourse",
    component:AddcourseComponent
  },
  {
    path:"addfriend",
    component:AddfriendComponent
  },
  {
    path:"employeereg",
    component:EmployeeregComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    NavbarComponent,
    AdminloginComponent,
    ViewAllFriendsComponent,
    ViewcourseComponent,
    EmployeeloginComponent,
    AddcourseComponent,
    AddfriendComponent,
    EmployeeregComponent,
    AdminnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
