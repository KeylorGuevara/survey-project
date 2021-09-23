import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SintomasComponent } from './sintomas/sintomas.component';
import { PhoneComponent } from './phone/phone.component';
import { InicioComponent } from './inicio/inicio.component';
import { CentrosSaludComponent } from './centros-salud/centros-salud.component';
import { EntidadSaludComponent } from './entidad-salud/entidad-salud.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path: 'sintomas', component: SintomasComponent},
  {path: 'centroSalud', component: CentrosSaludComponent,
  children: 
  [
    {
      path: 'info/:id', component: EntidadSaludComponent
    }
  ]

},
  {path: 'contacto', component: ContactComponent,
   children: 
   [
     {
       path: 'telefono', component: PhoneComponent
      }
    ]
  },
  {path: 'inicio', component: InicioComponent},

   {path: '', redirectTo:'/inicio', pathMatch: 'full'},
   { path: '**', component: ErrorPageComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
