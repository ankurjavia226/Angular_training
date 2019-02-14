import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Routing-example';

  toggleRegandLoginbtn: Boolean = true;
  toggleLogoutbtn: Boolean = false;  
  constructor(private _router: Router) { }

  ngOnInit() { 
    if(sessionStorage.length){
      this.toggleLogoutbtn = true;
      this.toggleRegandLoginbtn = false; 
    }
  } 

  logOutCurrentSession = () => {
    sessionStorage.removeItem('loggedinUser');
    this.toggleLogoutbtn = false;
    this.toggleRegandLoginbtn = true;
    this._router.navigateByUrl('/dashboard');
  }
}