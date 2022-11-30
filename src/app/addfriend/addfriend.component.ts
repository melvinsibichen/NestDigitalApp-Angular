import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddFriendComponent {
  constructor(private api: ApiService) { }
  name = ""
  friendName = ""
  friendNickName = ""
  DescribeYourFriend = ""

  readValues = () => {
    let data = { "name": this.name, "friendName": this.friendName, "friendNickName": this.friendNickName, "DescribeYourFriend": this.DescribeYourFriend }
    this.api.addFriends(data).subscribe(
      (response: any) => {
        if (response.status == "success") {
          alert("Friend added successfully")
          this.name = ""
          this.friendName = ""
          this.friendNickName = ""
          this.DescribeYourFriend = ""
        } else {
          alert("Error on adding Friend")
        }
      }
    )
    console.log(data)
  }
}