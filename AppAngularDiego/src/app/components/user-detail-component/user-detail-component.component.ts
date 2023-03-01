import { Component } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-detail-component',
  templateUrl: './user-detail-component.component.html',
  styleUrls: ['./user-detail-component.component.css']
})
export class UserDetailComponentComponent {

/*   datos: UserInterface[] = [];

  constructor (private servicio: UserServiceService) {}

  ngOnInit(): void{

    this.servicio.getItems().subscribe((data) => {
      console.log(data);
      this.datos = data;
    });

  } */

}
