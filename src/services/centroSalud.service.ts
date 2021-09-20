import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { listaCentrosSalud } from './dataCentrosSalud';
import { CentrosSalud } from 'src/services/CentrosSalud';

@Injectable({
    providedIn: 'root'
})

export class CentrosSaludService{
    constructor(){}

    getCentrosSalud():Observable<CentrosSalud[]>{
        const centrosSalud = of(listaCentrosSalud);
        return centrosSalud;
    }



    //esta trambolico 
    getEntidadSalud(id: number | any): CentrosSalud{
        const centro = listaCentrosSalud.filter(x => x.id === id)[0];
        return centro;
    }
}