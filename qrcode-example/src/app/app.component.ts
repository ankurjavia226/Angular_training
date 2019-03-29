import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  elementType :  'url' | 'canvas' | 'img' = 'canvas'; 
  value : string = 'http://app.msmwatercure.in/product-verify/GVilD4hohvLcfdIFhrq7THCrCiwwnyx9';
  response;
  dataList = [];
  urlList = [];

  constructor(private _httpclient: HttpClient) { }

   
  generateQRCode(){
    this._httpclient.post('http://app.msmwatercure.in:8080/product/item/filter', {
      "criteria": [
        {
          "column": "batchId",
          "operator": "=",
          "values": [
            "hRL8P"
          ]
        }
      ],
      "page": 0,
      "size": 100
    }).subscribe(res =>  {
      this.response = res;
      this.dataList = this.response.content;
      this.generateURL(this.dataList);
    });
  }

  generateURL(array){
    for(let i=0; i<array.length; i++){
      this.urlList[i] = `http://app.msmwatercure.in/product-verify/${array[i].serialNumber}`;
    }
  }

  downloadQRCode(){


    const divElem = document.getElementById('qrcode');

    var qrCodeCollection : HTMLCollection =  divElem.children;
    var arr = Array.prototype.slice.call( qrCodeCollection )
    arr.forEach(element => {
      const canvas = element.querySelector("canvas") as HTMLCanvasElement;
      const imageData = canvas.toDataURL("image/jpeg").toString();
    
      saveAs(imageData);  
    });


    // var blob = new Blob([imageData], { type: 'image/jpeg' });
    // var url = window.URL.createObjectURL(blob);
    // window.open(url);  
  }
}
