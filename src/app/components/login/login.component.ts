import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError:boolean = false;
  user:Object = {};
  msgError:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
    event.preventDefault();
    console.log("LOGIN");
    console.log(this.user);
    if(this.user["email"]=="david.higuita.75@gmail.com" && this.user["password"]=="12345"){
      this.loginError = false;
      this.router.navigate(['app/request']);
    }else{
      this.msgError = "Datos inválidos :(";
      this.loginError = true;
    }
  }

}
