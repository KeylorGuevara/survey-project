import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SintomasComponent } from './sintomas/sintomas.component';
import { CentrosSaludComponent } from './centros-salud/centros-salud.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PhoneComponent } from './phone/phone.component';
import { InicioComponent } from './inicio/inicio.component';
import { EntidadSaludComponent } from './entidad-salud/entidad-salud.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SintomasComponent,
    CentrosSaludComponent,
    FooterComponent,
    ContactComponent,
    PhoneComponent,
    InicioComponent,
    EntidadSaludComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
