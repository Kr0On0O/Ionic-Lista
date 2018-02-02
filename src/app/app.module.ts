import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//servicios
import {ListaDeseos} from '../app/services/listadeseos.service';

//Pipes
import {PlaceHolderPipe} from '../app/pipes/placeholder.pipe';
//paginas
import {Detalle} from '../pages/detalle/detalle.component';
import { TabsPage } from '../pages/tabs/tabs';
import {PendientesComponent} from '../pages/pendientes/pendientes.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TerminadosComponent} from "../pages/terminados/terminados.component";
import {AgregarComponent} from '../pages/agregar/agregar.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PlaceHolderPipe,
    PendientesComponent,
    TerminadosComponent,
    Detalle,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    Detalle,
    AgregarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseos,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
