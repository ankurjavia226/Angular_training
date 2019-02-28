import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '../../constants';
import { UsermanagementService } from 'src/app/feature-module/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "Angular Practice Example";
  constructor(private _router: Router,
              private _userManagementService: UsermanagementService) { }

  ngOnInit() {
  }

  ngOnChange(){
    this.toggleHeaderButtons;
  }
  
  get toggleHeaderButtons(){
    return this._userManagementService.getUser();
  }

  logOutCurrentSession = () => {
    sessionStorage.removeItem(AppStorage.USER_KEY);
    this._router.navigateByUrl('/header');
  }
}
