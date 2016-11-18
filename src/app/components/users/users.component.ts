import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [RequestService]
})
export class UsersComponent implements OnInit {

  posts:Array<any> = [];
  isGettingData:Boolean = false;

  constructor(private requestService:RequestService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts():void{
    this.isGettingData = true;
    this.requestService.getPosts().subscribe(
      (response)=>{
        this.isGettingData = false;
        this.posts = response;
      }
    );
  }

}
