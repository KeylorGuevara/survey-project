import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-viaje',
  templateUrl: './informacion-viaje.component.html',
  styleUrls: ['./informacion-viaje.component.css']
})
export class InformacionViajeComponent implements OnInit {

  mediosTransporte = ['Terrestre', 'Marítimo', 'Aéreo'];
  encuestadoDos = {procedencia: '', destino: '', 
                  fechaSalida:'', fechaLlegada:'', 
                  numeroTiquete:'',
                  medioTraslado: this.mediosTransporte[0]};
  constructor() { }

  ngOnInit(): void {
  }

}
