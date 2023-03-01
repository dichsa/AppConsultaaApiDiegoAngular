import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit{

  public users: UserInterface[] = [];

  constructor (private servicio: UserServiceService) {}

  async ngOnInit(): Promise<any>{
    let response = await this.servicio.getItems();
    this.users = response.results;
    console.log(this.users);
  }

}
