import { Component,Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  childComponentText;

  @Input() parentText;
  @Output() changeChildText = new EventEmitter()

  constructor() { }

  onChange(searchValue : string ) {  
   this.changeChildText.emit(searchValue);
   
  }
}