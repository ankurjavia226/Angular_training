import { Component, OnInit, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/_shared/services';
import { User } from 'src/app/_shared/model';
import { Output } from '@angular/core';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  userList: User[];
  @Output() loadUserData = new EventEmitter()
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this._userService.getData().subscribe(data => {
      this.userList = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() 
        } as User;
      });
    });
  }

  updateUser(user){
    this.loadUserData.emit(user);
  }

  removeUser(id){
    console.log(id);
    this._userService.deleteUser(id);
  }
}
