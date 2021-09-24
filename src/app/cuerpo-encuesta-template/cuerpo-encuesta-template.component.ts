import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo-encuesta-template',
  templateUrl: './cuerpo-encuesta-template.component.html',
  styleUrls: ['./cuerpo-encuesta-template.component.css']
})
export class CuerpoEncuestaTemplateComponent implements OnInit {

  sexos:String[] = ['Masculino', 'Femenino', 'Otro']; 

  encuestado = {nombre: 'Nombre', apellido: 'Apellido', sexo: this.sexos[0]};
  constructor() { }

  ngOnInit(): void {
  }

}