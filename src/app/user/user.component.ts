import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Posts } from '../posts'
import { UserService } from '../user.service';

/*
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
*/

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  post: Posts
  selectedUser:Posts;

  constructor(
    private userService: UserService, 
    private router: Router,
  ) {}
  
  onSelect(posts: Posts) {
    this.selectedUser = posts;
  }
  
  ngOnInit() {
  }

  getUsers(): void {
    this.userService.getUser()
        .subscribe(post => this.post = post);
  }

  updateUser() {
    this.userService.updateUser(this.selectedUser)
        .subscribe(() => this.router.navigate(['/']));
  }

  deleteUser() {
    this.userService.deleteUser(this.selectedUser)
        .subscribe(() => this.router.navigate(['/']));
  }

  clear() {
    this.post = {
      id: '',
      name: ''
    };
  }
}