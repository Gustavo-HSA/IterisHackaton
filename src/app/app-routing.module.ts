import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component'
import { LeisPageComponent } from './components/leis-page/leis-page.component';
import { LocaisDeApoioPageComponent } from './components/locais-de-apoio-page/locais-de-apoio-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { QuemSomosPageComponent } from './components/quem-somos-page/quem-somos-page.component';

const routes: Routes = [
  {
    path:'',
    component: MenuTemplateComponent,
    children: [
      {
        path:'',
        component: HomePageComponent
      },
      {
        path:'leis',
        component: LeisPageComponent
      },
      {
        path:'locais-de-apoio',
        component: LocaisDeApoioPageComponent
      },
      {
        path:'quem-somos',
        component: QuemSomosPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
