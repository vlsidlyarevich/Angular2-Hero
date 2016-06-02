import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-dashboard',
    templateUrl:'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit{

    heroes: Hero[];

    constructor(private heroService: HeroService){}

    ngOnInit(){
        this.heroService.getHeroes()
            .then(heroes=>this.heroes = heroes);
    }



}