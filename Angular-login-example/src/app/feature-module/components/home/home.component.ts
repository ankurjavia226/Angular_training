import { Component, OnInit } from '@angular/core';
import { UsermanagementService } from '../../services/user-management-services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  firstName = '';
  lastName = '';
  avatar = '';
  constructor(private _userManagementService: UsermanagementService) { }

  ngOnInit() {
    this.getPerticularUser();
  }

  getPerticularUser() {
    let users;

    this._userManagementService.getSpecifiedUser(2)
          .subscribe(res => {
            users = res;
            this.patchData(users);
          });
  }

  patchData(currentUser){
    this.firstName = currentUser.data.first_name;
    this.lastName = currentUser.data.last_name;
    this.avatar = currentUser.data.avatar;
  }
}