import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { RequestService } from '../../services/request.service';

declare var jQuery:any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [RequestService]
})
export class FormComponent implements OnInit {

  user:Object = {
    email: "",
    name: "",
    role: "user",
    sex: false
  };  

  //constructor() { }
  constructor(private requestService:RequestService) { }

  ngOnInit() {
  }

  submitForm(e){
    e.preventDefault();
    console.log("test jquery on A2");
    console.log(jQuery);
    console.log(jQuery("#formTest"));

    jQuery("#formTest").ajaxSubmit({
      url:"http://localhost:3000/upload",
      method: "post",
      cache: false,
      success: function(data){console.log(data);},
      error: function(err){console.log(err);}
    });
  }
}
