import { collectExternalReferences } from '@angular/compiler';
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
          <td scope="row">`+item.id+ `</td>
          <td> `+item.nombre+`</td>
          <td>`+item.correoElectronico+`</td>
          <td>`+item.direccionProvincia+`</td>
          <td> <a class="enlaceDetalleCentroSalud">Ver Detalles</a> </td>
        </tr>`;
    }
  }

  encuentra2(){
    let h1 = document.getElementById('h1NoTocar') as HTMLDivElement;
    return h1.innerText;
  }
  encuentraID(){
    $('#myTable').on('click', 'td', function() {
      let h1 = document.getElementById('h1NoTocar') as HTMLDivElement;
      h1.innerHTML = $(this).closest("tr").find("td:eq(0)").text();
 });
    
  }
  
  
  getDetalles():any {
    const centroS = document.getElementsByClassName('enlaceDetalleCentroSalud')!;
    const observable = fromEvent(centroS, 'click');
    observable.subscribe((centroS) => this.muestraCard() );
  }

  muestraCard(){
    this.encuentraID();
    let idBuscar = this.encuentra2();
    if(typeof(idBuscar) == 'string' )
    {
      const val =this.centroSaludService.getEntidadSalud(Number(idBuscar));
      console.log(val.id);
      console.log(val.correoElectronico);
      console.log(val.nombre);
      console.log(val.direccionProvincia);
      }

  }

}





 //var h1Text = document.getElementsByClassName(".h1NoTocar") as HTMLDivElement;



    //ESTE SI FUNCIONA
    // var a=   $('#myTable').on('click','.enlaceDetalleCentroSalud',function(){
    //   var currentRow=$(this).closest("tr");
    //   var col1:string|undefined=currentRow.find("td:eq(0)").text();
    //   console.log("Envia: ",col1);
    //   //this.testJQ = currentRow.find("td:eq(0)").text().toString();
    //   returnValue += col1;
    //   //console.log("Prueba :) :",this.testJQ);
    //  //  a=a+1;
    //   });


     // let a= document.getElementById("myTable") as HTMLTableRowElement;
     // const rows = a.cells// a.tBodies[0].rows[0].cells[0].closest("tr");
     // console.log(rows);
    //   Array.from(rows).forEach((row, idx) => {
    //     // attach a click handler on each row
    //     row.addEventListener('click', event => {
    //       // get all cells in the row, convert them to an array with the spread operator (...)
    //       // then for each cell, return its textContent by mapping on the array
    //       const tds = Array.from(row.cells).map(td => td.textContent);
    // console.log('row index:', idx);
    // // Log the tds content array
    // console.log('tds content:', ...tds);
    // // join the contents of the tds with a space and display the string
    // console.log('tds string:', tds.join(' '));
 // });
//});


  //    console.log("otra mas ",a)
  //    console.log("valor de trata de enviar: ",returnValue);
  //    return returnValue;