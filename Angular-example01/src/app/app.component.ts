import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  urlEnteredByUser: string ;
  
  getInputURL($event){
    this.urlEnteredByUser = $event;
  }

  clearURL($event){
    this.urlEnteredByUser = $event;
  }
}