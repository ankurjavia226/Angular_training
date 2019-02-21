import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.css']
})
export class VideoDisplayComponent implements OnInit {

  errorOccured: Boolean ;
  @Input() receivedURL;
  @Output() clearDisplayVideoURL = new EventEmitter();

  constructor(private sanitizer:DomSanitizer){}
 
  ngOnInit() {  
    this.receivedURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.receivedURL);
  }

  closeVideoScreen(){
  this.clearDisplayVideoURL.emit('');
  }

  disableCancelBtn(){    
    this.errorOccured = true;
  }
}