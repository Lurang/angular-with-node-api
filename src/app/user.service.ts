import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Posts } from './posts'


@Injectable({ providedIn: 'root'})
export class UserService{
    post:Posts;

    constructor(
        private http: HttpClient
    ) {}

    getUser() {
        return this.http.get<Posts>('http://localhost:3000/api/getUser');
    }
    updateUser(selectedUser: Posts) {
        return this.http.put('http://localhost:3000/api/updateUser', selectedUser)
    }
    deleteUser(selectedUser: Posts) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
            body: selectedUser
        }
        return this.http.delete('http://localhost:3000/api/deleteUser', httpOptions)
    }
    addUser(user: Posts) {
        return this.http.post('http://localhost:3000/api/addUser', user)
    }
    loginUser(user) {
        return this.http.post('http://localhost:3000/api/loginUser', user)
    }
}
