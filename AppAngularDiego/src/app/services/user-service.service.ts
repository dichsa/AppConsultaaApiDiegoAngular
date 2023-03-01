import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  linkApi: string = 'https://peticiones.online/api/users';

  constructor(private httpClient: HttpClient) { 
  }
  

  getItems(pPage: number = 1): Promise<any>{
    return lastValueFrom(this.httpClient.get<any>(`${this.linkApi}?page=${pPage}`));
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
