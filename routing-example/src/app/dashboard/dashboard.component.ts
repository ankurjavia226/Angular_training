import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  toggleVisibility: Boolean = false;

  constructor(private _router: Router) { }

  ngOnInit() {
    if(sessionStorage.length){
      this.toggleVisibility = true;
    }
  }

  logOutCurrentSession = () => {
    sessionStorage.removeItem('loggedinUser');
    this.toggleVisibility = false;
    this._router.navigateByUrl('/home');
  }
}