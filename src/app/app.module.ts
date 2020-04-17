import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { PruebaComponent } from './prueba/prueba.component';
import { ContigenciaComponent } from './contigencia/contigencia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { InformativoComponent } from './informativo/informativo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';


const routes:Routes = [{path:'',component:ContigenciaComponent},
                       {path:'noticias',component:NoticiasComponent},
                       {path:'contacto',component:ContactoComponent},
                       {path:'informativo',component:InformativoComponent},
                       {path:'principal',component:PrincipalComponent},
                       {path:'galeria',component:GaleriaComponent},
                       {path:'prueba',component:PruebaComponent} 

]


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PruebaComponent,
    ContigenciaComponent,
    NoticiasComponent,
    InformativoComponent,
    ContactoComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
