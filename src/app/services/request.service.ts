import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {

  constructor(private http:Http) { }

  getArticlesByHttp():Observable<any>{
    return this.http.get('http://bioingcalculo.udea.edu.co/apirepos/articlesx').map(
      (response) => {
        return response.json();
      }
    );
  }

  getPosts():Observable<any>{
    return this.http.get('http://jsonplaceholder.typicode.com/posts').map(
      (response) => {
        return response.json();
      }
    );
  }
}
