import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Hero } from '../model/hero.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HeroesServiceService {
	heroesFirstList: Hero[] = [];
	heroesSearched: Hero[] = [];
	constructor( private http: HttpClient ) {}

	getQuery(query) {
		const url = `/api/10220843887864415/${query}`;
		return this.http.get(url);
	}

	getHeroesFirstList(): Observable<any> {
		return this.getQuery('search/ant').pipe(map((data: any) => {
			const heroes = data.results.map( (hero: any) => {
				delete hero.appearance;
				delete hero.connections;
				delete hero.work;
				return hero;
			});
			this.heroesFirstList = heroes;
		}));
	}

	searchHeroes(term: string) {
		return this.getQuery(`search/${term}`).pipe(map((data: any) => {
			this.heroesSearched = data.results;
		}));
	}

	getHero(id) {
		return this.getQuery(`${id}`).pipe(map((hero: any) => {
			delete hero.appearance;
			delete hero.connections;
			delete hero.work;
			return hero;
		}));
	}
}
