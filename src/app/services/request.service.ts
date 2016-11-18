import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {

  constructor(private http:Http) { }

  getArticlesByHttp():Observable<any>{
    return this.http.get('http://bioingcalculo.udea.edu.co/apirepos/articles').map(
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

  addUser(user:any):Observable<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://127.0.0.1:3010/user', user, headers).map(
      (response) => {return response.json();}
    ); 
  }

  getDataTest(){
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post("http://localhost:3010/test/data", {}, headers)
      .map((response)=>{
        return response.json();
      });
  }
}
