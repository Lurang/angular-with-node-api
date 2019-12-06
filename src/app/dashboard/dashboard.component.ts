import { Component, OnInit } from '@angular/core';

import { Posts } from '../posts';
import { UserService } from '../user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  post: Posts;
  
  constructor(private userService: UserService) {}
  ngOnInit() { 
    this.getUsers();
  }
  
  getUsers(): void {
    this.userService.getUser()
        .subscribe(post => this.post = post);
  }
}
