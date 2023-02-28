import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent{

  datos$: Observable<any[]>;

  constructor (private servicio: UserServiceService) {}

  ngOnInit() {

    this.datos$ = this.servicio.getItems();

  }

}
