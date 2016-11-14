import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  articles:Array<any> = [
    {name: "Article 1", _id: "1"},
    {name: "Article 2", _id: "2"},
    {name: "Article 3", _id: "3"},
    {name: "Article 4", _id: "4"},
  ];

  counter = this.articles.length+1;

  articleSelected;
  isEmpty:boolean = false;

  constructor(private http:Http) { }

  ngOnInit() {
  }

  request(){
    console.log("Test request");
    this.articles.push({name: `Article ${this.counter}`, _id: this.counter});
    this.counter++;
    this.isEmpty = false;
  }

  deleteLast(){
    this.articles.pop();
    if(this.articles.length==0){
      this.isEmpty = true;
    }
  }

  getArticlesByHttp():Observable<Object[]>{
    return this.http.get('http://bioingcalculo.udea.edu.co/apirepos/articles').map(
      (response) => {
        return response.json();
      }
    );
  }
}
