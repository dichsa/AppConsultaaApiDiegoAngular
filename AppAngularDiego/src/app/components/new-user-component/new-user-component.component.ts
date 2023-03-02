import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-component',
  templateUrl: './new-user-component.component.html',
  styleUrls: ['./new-user-component.component.css']
})
export class NewUserComponentComponent {
  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      edad: new FormControl("", [
        Validators.required,
        Validators.min(18)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      dni: new FormControl("", [
        this.dniValidator
      ]),
      password: new FormControl("", [
        Validators.required
      ]),
      repitepassword: new FormControl("", [])
    }, [this.checkPassword])
  }

  checkPassword(pFormValue: AbstractControl) {
    const password: string = pFormValue.get('password')?.value;
    const repitepassword: string = pFormValue.get('repitepassword')?.value;

    if (password !== repitepassword) {
      return { 'checkpassword': true }
    }
    return null;

  }

  dniValidator(pControlName: AbstractControl): any {
    //validar de un dni no solo consiste en decir que tenga 8 numeros y letra sino que la letra debe coincidir con la posicion que resuelve de dividir el numero del dni por 23 su resto me da una posicion un array letras.
    const letrasDni: string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    const dni = pControlName.value;
    const exp = /^\d{8}[A-Z]/;

    if (exp.test(dni)) {
      //el dni esta bien escrito pero no significa que sea valido

      const numero: number = parseInt(dni.substring(0, dni.length - 1));
      const letra: string = dni.at(-1);
      const position: number = numero % 23;

      return (letra !== letrasDni[position]) ? { 'dnivalidator': 'La letra no corresponde con el dni' } : null

    } else {
      return { 'dnivalidator': 'formato de dni es incorrecto' };
    }

  }

  getDataForm() {
    console.log(this.formModel.value);
  }

  checkControl(pControlName: string, pError: string): boolean {
    if (this.formModel.get(pControlName)?.hasError(pError) && this.formModel.get(pControlName)?.touched) {
      return true;
    }
    return false;
  }
}
