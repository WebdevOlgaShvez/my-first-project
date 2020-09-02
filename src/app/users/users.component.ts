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
  searchStr :string;
  username: string;
  name: string;
  role: string;
  selectedList: User [];
  constructor(public us: UsersService) { }

  ngOnInit() {
    this.usersList= this.us.getUsersList();
  }
 
  search(query: string){
    this.usersList= this.us.findUser(query);

  }
   sort(direction: string){
    this.usersList= this.us.sortUsers(direction);

   };
   addUser(){
     this.us.addUser({
       
      id: 1,
      name: this.name,
      username: this.username,
      email: "",
      role: this.role,
      phone: "",
      website: ""

     });
     this.usersList = this.us.getUsersList();
   }

   selectItem(users: any){
      this.selectedList=[];
      users.forEach(element => {
        this.selectedList.push(element.value)
      });
   }

   deleteUsers(){
     this.us.deleteUsers(this.selectedList)
this.usersList=this.us.getUsersList();
   }


}
