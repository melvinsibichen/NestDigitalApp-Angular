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
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { EmployeenavbarComponent } from './employeenavbar/employeenavbar.component';
import { ViewAllCourseComponent } from './viewcourse/viewcourse.component';
import { EmployeeLoginComponent } from './employeelogin/employeelogin.component';
import { AddCourseComponent } from './addcourse/addcourse.component';
import { AddFriendComponent } from './addfriend/addfriend.component';
import { EmployeeRegComponent } from './employeereg/employeereg.component';


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
    component:EmployeeLoginComponent
  },
  {
    path:"addcourse",
    component:AddCourseComponent
  },
  {
    path:"addfriend",
    component:AddFriendComponent
  },
  {
    path:"employeereg",
    component:EmployeeRegComponent
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
    ViewAllCourseComponent,
    EmployeeLoginComponent,
    AddCourseComponent,
    AddFriendComponent,
    EmployeeRegComponent,
    AdminnavbarComponent,
    EmployeenavbarComponent
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
