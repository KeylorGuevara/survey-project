import { CentrosSalud } from "./CentrosSalud";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { listaCentrosSalud } from "./dataCentrosSalud";

@Injectable({
    providedIn: 'root'
})

export class CentrosSaludService{
    constructor(){}

    getCentrosSalud():Observable<CentrosSalud[]>{
        const centrosSalud = of(listaCentrosSalud);
        return centrosSalud;
    }
}