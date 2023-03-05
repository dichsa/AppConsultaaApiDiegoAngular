import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-detail-component',
  templateUrl: './user-detail-component.component.html',
  styleUrls: ['./user-detail-component.component.css']
})
export class UserDetailComponentComponent implements OnInit{

  user: UserInterface | any;

  constructor (private servicio: UserServiceService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id = params.id;
      let response: any = await this.servicio.getById(id);
      this.user = response;
      console.log(response);
      console.log(this.user);
    });
  }

  async deleteUser(pId: number | undefined): Promise<void> {
    //consultar al servicio para hacer el borrado.
    if (pId !== undefined) {
      try {
        let response = await this.servicio.deleteObs(pId);
        if (!response) {
          alert('Usuario borrado correctamente')
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  
}
