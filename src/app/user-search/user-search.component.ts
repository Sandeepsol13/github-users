import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  searchString: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
    })
  }
  
  SearchUser(user:string){
    console.log(user);
  }

}
