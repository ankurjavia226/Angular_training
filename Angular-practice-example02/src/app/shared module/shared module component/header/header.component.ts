import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth module/auth module service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Routing-example';
  sessionStorageKey = "loggedinUser";

  constructor(private _router: Router, 
              private _authService: AuthService) { }

  ngOnInit() { 

  }
  
  get toggleHeaderButtons(){
    return sessionStorage.getItem(this.sessionStorageKey);
  }

  logOutCurrentSession = () => {
    sessionStorage.removeItem(this.sessionStorageKey);
    this._authService.setLoggedIn(false);
    // this._router.navigate(['/user-login']);
  }
}