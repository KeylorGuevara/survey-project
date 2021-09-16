import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { listaSintomas } from "./dataSintomas";
import { Sintoma } from "./Sintoma";


@Injectable({
    providedIn: 'root'
  })
  
  export class SintomasService{
    constructor(){}
  
    getSintomas(): Observable<Sintoma[]>
    {
      const sintomas = of(listaSintomas);
      return sintomas;
    }
  }