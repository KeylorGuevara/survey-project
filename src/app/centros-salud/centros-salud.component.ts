import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { CentrosSaludService } from 'src/services/centroSalud.service';
import { CentrosSalud } from 'src/services/CentrosSalud';

@Component({
  selector: 'app-centros-salud',
  templateUrl: './centros-salud.component.html',
  styleUrls: ['./centros-salud.component.css']
})
export class CentrosSaludComponent implements OnInit {

  constructor( private centroSaludService : CentrosSaludService) { }

  ngOnInit(): void {
    this.getCentrosSalud();
    this.getDetalles();
  }

  centrosSaludListado: CentrosSalud[]= [];

  getDetalles():any {
    const check = document.getElementsByClassName('enlaceDetalleCentroSalud')!;
    const observable = fromEvent(check, 'click');
    observable.subscribe((check) => this.muestraCard());
  }

  muestraCard(){
    alert("vamos+bien")
  }
  getCentrosSalud(): void{
    this.centroSaludService.getCentrosSalud()
    .subscribe( cs => this.muestraCentrosSalud(cs));
  }

  muestraCentrosSalud(val: CentrosSalud[]):any{
    let ul = document.getElementById("cuerpoTabla") as HTMLDataListElement;
    for (const item of val)
    {
      ul.innerHTML+=
      `<tr>
          <th scope="row">`+item.id+ `</th>
          <td> `+item.nombre+`</td>
          <td>`+item.correoElectronico+`</td>
          <td>`+item.direccionProvincia+`</td>
          <td> <a class="enlaceDetalleCentroSalud" href="https://www.w3schools.com">Ver Detalles</a> </td>
        </tr>`;
    }
  }

}
