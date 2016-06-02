import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from "./dashboard.component";


@Component({
    selector: 'my-app',
    template:`
         <h1>{{title}}</h1>
         <a [routerLink]="['Dashboard']">Dashboard</a>
         <a [routerLink]="['Heroes']">Heroes</a>
         <router-outlet></router-outlet>
         `,
    directives: [ROUTER_DIRECTIVES],
    providers:[
        ROUTER_PROVIDERS,
        HeroService
    ]
})

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path:'/dashboard',
        name:'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    }
])

export class AppComponent{
    title = 'Tour of Heroes';
}