import { Component } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent{

  datos: UserInterface[] = [];

  constructor (private servicio: UserServiceService) {}

  ngOnInit(): void{

    this.servicio.getItems().subscribe((data) => {
      this.datos = data;
    });

  }

}
