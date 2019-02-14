import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Routing-example';
  constructor(private _router: Router) { }

  ngOnInit() { 

  }
  
  get toggleHeaderButtons(){
    return sessionStorage.getItem('loggedinUser');
  }

  logOutCurrentSession = () => {
    sessionStorage.removeItem('loggedinUser');
    this._router.navigateByUrl('/header');
  }
}