import { Component, OnInit } from '@angular/core';
import { CentrosSaludComponent } from '../centros-salud/centros-salud.component';
import { CentrosSalud } from 'src/services/CentrosSalud';
import { CentrosSaludService } from '../../services/centroSalud.service';
import { fromEvent } from 'rxjs';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-entidad-salud',
  templateUrl: './entidad-salud.component.html',
  styleUrls: ['./entidad-salud.component.css']
})
export class EntidadSaludComponent implements OnInit {

  constructor(private CentrosSaludService: CentrosSaludService, 
              private routeConstructor: ActivatedRoute) { }

  id:Number = 0;

  ngOnInit(): void {
   // this.getEntidadSalud();
     this.routeConstructor.params.subscribe(params => {
       this.id = Number.parseInt(params['id']);
       console.log("Obtiene del url: ", this.id)
       this.getEntidadSalud();
    })


   
    // this.routeConstructor.queryParams.subscribe(params =>{
    //   this.id = params['id'];
    // });
  }

   getEntidadSalud(): void
     {
      const val =this.CentrosSaludService.getEntidadSalud(Number(this.id));
      console.log(val.id);
      console.log(val.correoElectronico);
      console.log(val.nombre);
      console.log(val.direccionProvincia);

      let divID = document.getElementById('idCentroMedico') as HTMLDivElement;
   let divNombre = document.getElementById('nombreCentroMedico') as HTMLDivElement;
   let divCorreo = document.getElementById('correoCentroMedico') as HTMLDivElement;
   let divUbicacion = document.getElementById('ubicacionCentroMedico') as HTMLDivElement;
   if(this.id != null)
    {
      //limpia
      divID.innerHTML= "";
      divNombre.innerHTML= "";
      divCorreo.innerHTML= "";
      divUbicacion.innerHTML= "";
      //recarga
      divID.innerHTML+= val.id;
      divNombre.innerHTML+= val.nombre;
      divCorreo.innerHTML+= val.correoElectronico;
      divUbicacion.innerHTML+= val.direccionProvincia
    }

    }

    // printSintomas(val:Sintoma[]):any{
    //   let ul = document.getElementById("listaSintomas") as HTMLDataListElement;
    //   for (const item of val)
    //   {
    
    //      ul.innerHTML +=  `<div class="form-check">
    //       <input class="form-check-input flexCheckDefault" type="checkbox">
    //       <label class="form-check-label" for="flexCheckDefault"> `+
    //           item.name + `
    //         </label>
    //     </div> `
    //   }
    // }


}
