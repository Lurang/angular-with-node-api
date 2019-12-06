import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

//import * as argon2 from "argon2";
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formUser = {
    id: '',
    name: '',
    password: '',
  }
  secretUser = {
    id: '',
    name: '',
    password: ''
  }
/*
  hash(password) {
    return argon2.hash(password)
  }
*/
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  loginUser(formUser) {
    /*
    this.secretUser.id = formUser.id;
    this.secretUser.name = formUser.name;
    this.hash(formUser.password)
      .then((hash) => {
        this.secretUser.password = hash;
      }) 
    */

    this.userService.loginUser(formUser)
        .subscribe(() => this.router.navigate(['/']));
  }
  
  ngOnInit() {
  }

}
