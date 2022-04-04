import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto';
  items: MenuItem[] = [];


  ngOnInit() {

    this.items = [
      // {
      //   label:'Photo',
      //   icon:'pi pi-fw pi-plus',
      // },
      {
          label:'Features',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-plus',
                  items:[
                  {
                      label:'Photo',
                      icon:'pi pi-fw pi-bookmark'
                  }

                  ]
              }
          ]
      },
      {
          label:'Pricing',

      },
      {
          label:'Community',

      },
      {
          label:'Support',

      }
  ];
  }

}
