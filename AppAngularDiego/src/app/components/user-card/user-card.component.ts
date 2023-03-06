import { Component, Input } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

constructor (private servicio: UserServiceService) {}
@Input() miUser!: UserInterface;

async deleteUser(pId: number | undefined): Promise<void> {
  //consultar al servicio para hacer el borrado.
  if (pId !== undefined) {
    try {
      let response = await this.servicio.delete(pId);
      if (response) {
        alert('Usuario borrado correctamente')
      }
    } catch (error) {
      console.log(error);
    }
  }
}
}
