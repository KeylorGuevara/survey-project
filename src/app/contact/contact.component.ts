import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private routeConstructor: ActivatedRoute) { }

  name = "";

  ngOnInit(): void {
    this.routeConstructor.queryParams.subscribe(params =>{
      this.name = params['name'];
    });
    
    let div = document.getElementById('idContacto') as HTMLDivElement;
    if(this.name != null)
    {
      div.innerHTML+= this.name;
    }
  }

}
