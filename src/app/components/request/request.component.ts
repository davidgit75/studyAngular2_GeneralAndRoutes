import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestService } from '../../services/request.service';

import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  providers: [RequestService]
})
export class RequestComponent implements OnInit {

  articles:Array<any> = [];
  isGettingData:Boolean = false;

  counter = this.articles.length+1;

  articleSelected;
  isEmpty:boolean = false;

  constructor(private requestService:RequestService) { }

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

  getArticlesByHttp():void{
    this.isGettingData = true;
    this.requestService.getArticlesByHttp().subscribe(
      (response) => {
        this.isGettingData = false;
        this.articles = response.articles;
      },
      (err)=>{
        console.log("ERROR");
        console.log(err);
      }
    );
  }
}
