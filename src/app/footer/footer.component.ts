import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cargaFechaActual();
  }

  cargaFechaActual():any{
    let spanFecha = document.getElementById("annoAutomatico") as HTMLSpanElement;
    let anno = new Date().getFullYear().toString();
    spanFecha.innerHTML= anno;
  }

}
