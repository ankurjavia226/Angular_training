import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  displayChildComponentText;
  parentComponentText = '';
  constructor() { }

  ngOnInit() {
  }

  getChildText($event){
    this.displayChildComponentText = $event;
    
  }
}