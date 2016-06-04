import {Injectable} from '@angular/core';
import {Hero} from './hero';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService{
    getHeroes(): Promise<Hero[]>{
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getHero(id:number){
        return Promise.resolve(HEROES)
            .then(heroes => heroes.filter(hero => hero.id == id)[0] );
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}