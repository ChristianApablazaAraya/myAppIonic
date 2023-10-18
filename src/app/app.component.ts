import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';
import { MenuController } from '@ionic/angular'; 


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
  ];

  constructor(public router: Router, private menu: MenuController)  { }


  abrirMapa() {
    this.router.navigate(["/mapa"]);
    this.menu.close();
  }

  cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.router.navigate(["/ingreso"]);
    this.menu.close();
  }
}