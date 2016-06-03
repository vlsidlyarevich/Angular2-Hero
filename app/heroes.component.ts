import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {

    constructor(private heroService:HeroService,
                private router:Router) {
    };

    getHeroes() {
        this.heroService.getHeroes().then(heroes=>this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }


    heroes:Hero[];
    selectedHero:Hero;

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    gotoDetail(hero:Hero) {
        let link = ['HeroDetail', {id: hero.id}];
        this.router.navigate(link);
    }
}
