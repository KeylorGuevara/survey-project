import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { Sintoma } from 'src/services/Sintoma';
import { SintomasService } from 'src/services/sintomas.service';
import { fromEvent } from 'rxjs';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.component.html',
  styleUrls: ['./sintomas.component.css']
})
export class SintomasComponent implements OnInit {

  constructor( private sintomaService:SintomasService) { }
  ngOnInit(): void {
    this.getSintomas();
    this.detectaSintoma();
  }

  detectaSintoma(): any {
    const check = document.getElementsByClassName('flexCheckDefault')!;
    const observable = fromEvent(check, 'change');
    observable.subscribe((check) => this.muestraCard());
  }

  muestraCard(){
    let card = document.getElementById('mensajeAlerta') as HTMLDivElement;
    let check = document.getElementById("inputCheckNinguno") as HTMLInputElement;
    check.checked = false;
    card.className = 'col-4 mostrar';
  }


  onNativeChange(e: any) { // here e is a native event
    if(e.target.checked){
      let card = document.getElementById('mensajeAlerta') as HTMLDivElement;
      card.className = 'col-4 mostrar';
    }
  }


  onNativeChangeNinguno(e: any) { // here e is a native event
    if(e.target.checked){
 
      let card = document.getElementById('mensajeAlerta') as HTMLDivElement;
      card.className = 'col-4 oculta';
      let div = document.getElementById('listaCentrosSalud') as HTMLDivElement;
      div.className  = 'container oculta';
    }
  }

  sintomas: Sintoma[]= [];
  
  getSintomas(): void
    {
      this.sintomaService.getSintomas()
      .subscribe(s => this.printSintomas(s));
    }

    printSintomas(val:Sintoma[]):any{
      let ul = document.getElementById("listaSintomas") as HTMLDataListElement;
      for (const item of val)
      {
    
         ul.innerHTML +=  `<div class="form-check">
          <input class="form-check-input flexCheckDefault" type="checkbox">
          <label class="form-check-label" for="flexCheckDefault"> `+
              item.name + `
            </label>
        </div> `
      }
    }


    muestraCentrosSalud(): any {
      let div = document.getElementById('listaCentrosSalud') as HTMLDivElement;
      div.className  = 'container mostrar';
    }


    marcaTodosFuntion(): any {
      let checkedItems = jQuery("input[type='checkbox'][id!=inputCheckNinguno]");
      let check = document.getElementById("inputCheckNinguno") as HTMLInputElement;
      check.checked = false;
      for (let item = 0; item < checkedItems.length; item++) {
        (checkedItems[item] as HTMLInputElement).checked = true;
    }
    }

    desmarcaTodosFuntion(): any {
      var checkedItems = jQuery("input[type='checkbox'][id!=inputCheckNinguno]");
      let check = document.getElementById("inputCheckNinguno") as HTMLInputElement;
      check.checked = true;
      for (let item = 0; item < checkedItems.length; item++) {
        (checkedItems[item] as HTMLInputElement).checked = false;
    }
    }

    
}

