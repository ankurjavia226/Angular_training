import { Component } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'dataFromApi';
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  data: {};

  constructor (private httpClient: HttpClient){
    this.getUsers();
    this.getData();
  }

  getData() : Observable<any> {
    return this.httpClient.get(this.apiUrl)
    .pipe(
      map((res: Response) => {
        return res;
      }));
  }
  
  getUsers() {
    return this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
}