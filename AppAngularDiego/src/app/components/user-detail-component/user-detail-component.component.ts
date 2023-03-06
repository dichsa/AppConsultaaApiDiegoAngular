import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-detail-component',
  templateUrl: './user-detail-component.component.html',
  styleUrls: ['./user-detail-component.component.css']
})
export class UserDetailComponentComponent implements OnInit{

  user: UserInterface | any;

  title: string = 'Registro'
  userForm: FormGroup;
  msg: string = "";
  type: string = "";
  isUpdate: Boolean = false;

  constructor(
    private servicio: UserServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    this.userForm = new FormGroup({
      first_name: new FormControl("", []),
      last_name: new FormControl("", []),
      email: new FormControl("", []),
      image: new FormControl("", []),
    }, []);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {

    });
    this.activatedRoute.params.subscribe(async (params: any) => {
      console.log(params)
      let id = params.id;
      let response: any = await this.servicio.getById(id);
      this.user = response;
      if (id) {
        this.isUpdate = true;
        this.title = 'Actualizar'
        console.log(id)
        const response = await this.servicio.getById(id);
        const user: UserInterface = response;
        console.log(user)

        this.userForm = new FormGroup({
          _id: new FormControl(id, []),
          first_name: new FormControl(user?.first_name, []),
          last_name: new FormControl(user?.last_name, []),
          email: new FormControl(user?.email, []),
          image: new FormControl(user?.image, []),
        }, []);
      }
    })

  }
  async getDataForm() {
    let user = this.userForm.value;
    console.log(user)
    if (this.isUpdate) {
      this.servicio.update(user).then((data: UserInterface) => {
        if (data._id) {
          this.msg = `usuario ${data.first_name} con id ${data._id} se actualizado correctamente`
          this.type = 'success'
        }
      });

    } else {
      try {
        let response = await this.servicio.create(user)
        if (response.id) {
          this.msg = `usuario ${response.first_name} con id ${response.id} se creado correctamente`;
          this.type = 'success'
        }
      }
      catch (err) {
        console.log(err)
      }
    } 
  }

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
