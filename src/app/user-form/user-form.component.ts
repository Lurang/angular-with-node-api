import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../user.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {
  formUser = {
    id:'',
    name: '',
    password: '',
  }
  
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  addUser(formUser) {
    this.userService.addUser(formUser)
        .subscribe(() => this.router.navigate(['/']));
  }

  ngOnInit() {
  }

}
