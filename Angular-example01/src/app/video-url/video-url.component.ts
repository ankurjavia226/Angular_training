import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-url',
  templateUrl: './video-url.component.html',
  styleUrls: ['./video-url.component.css']
})
export class VideoUrlComponent implements OnInit {

  inputURL: string = '';

  @Input() receivedURL;  
  @Output() urlForDisplayVideo = new EventEmitter();

  constructor() { } 

  ngOnInit() {

  }

  ngOnChanges() {
    this.inputURL = this.receivedURL;
  }

  playVideo() {
    this.urlForDisplayVideo.emit(this.inputURL);
  }
}
