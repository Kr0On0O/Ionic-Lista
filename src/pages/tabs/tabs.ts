import { Component } from '@angular/core';

import {PendientesComponent} from '../pendientes/pendientes.component';
import {TerminadosComponent}  from '../terminados/terminados.component';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = TerminadosComponent;


  constructor() {

  }
}
