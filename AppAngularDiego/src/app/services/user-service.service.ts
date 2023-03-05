import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private linkApi: string = 'https://peticiones.online/api/users/';

  constructor(private httpClient: HttpClient) { }

  getItems(pPage: number = 1): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.linkApi}?page=${pPage}`));
  }

  getById(id: string): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.linkApi}${id}`));
  }

  create(pUser: UserInterface): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(`${this.linkApi}`, pUser))
  }

  update(pUser: UserInterface): Promise<any>{
    return lastValueFrom(this.httpClient.put<any>(`${this.linkApi}${pUser._id}`, pUser))
  }

  deleteObs(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.linkApi}${pId}`)) 
  }
}
