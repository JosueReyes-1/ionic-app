import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] =[
    {
      icon: 'baseball-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alarm-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'albums-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'calendar',
      name: 'Date Time',
      redirectTo: '/date-time'
    },
    {
      icon: 'infinite',
      name: 'Infinite Scroll',
      redirectTo: '/infinite-scroll'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
