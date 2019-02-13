import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  setVisible: Boolean = true;
  constructor() { }

  ngOnInit() {
    
    if(sessionStorage.length){
      this.setVisible = false;
    }
  }
}