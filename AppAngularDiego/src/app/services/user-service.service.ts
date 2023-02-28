import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* import { User } from './user.model'; */

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { 
  }
  

  getItems() {
    return this.http.get('https://peticiones.online/api/users');
  }

  
  /* getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<User>(url);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL, user);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiURL}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<User>(url);
  } */
}
