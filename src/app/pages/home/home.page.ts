import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Array<Componente>;
  constructor() {
    this.componentes = [
      {
        icon: 'american-football',
        name: 'Action Sheet',
        redirectTo: '/action-sheet'
      },
      {
        icon: 'appstore',
        name: 'Alert',
        redirectTo: '/alert'
      },
      {
        icon: 'beaker',
        name: 'Avatar',
        redirectTo: '/avatar'
      },
      {
        icon: 'radio-button-on',
        name: 'Buttons',
        redirectTo: '/buttons'
      }
    ];
  }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
