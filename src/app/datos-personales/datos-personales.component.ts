import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {


  sexos = ['Masculino', 'Femenino', 'Binario'];
  encuestadoUno = {cedula: '', nombre: '', 
                  apellido:'', fechaNacimiento:'', 
                  telefono:'', correoElectronico:'',
                  sexo: this.sexos[0]};
  constructor() { }

  ngOnInit(): void {
  }

}
