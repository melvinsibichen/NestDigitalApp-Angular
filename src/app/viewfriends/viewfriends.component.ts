import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-friends',
  templateUrl: './viewfriends.component.html',
  styleUrls: ['./viewfriends.component.css']
})
export class ViewAllFriendsComponent {
  constructor(private api:ApiService){
    api.fetchAllFriends().subscribe(
      (response)=>{
        this.friends = response
      }
    )
  }
  friends:any = []
}