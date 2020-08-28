import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'
import { User } from '../shared/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: User[]=[];

  constructor(public us: UsersService) { }

  ngOnInit(): void {
    this.usersList= this.us.getUsersList();
  }
 
  search(query: string){
    this.usersList= this.us.findUser(query);

  }
   sort(direction: string){
    this.usersList= this.us.sortUsers(direction);

   }
}
