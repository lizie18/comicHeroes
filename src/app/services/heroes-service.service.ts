import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class HeroesServiceService {
	heroesFirstList: any[] = [];
	heroes: any[] = [];
	constructor( private http: HttpClient ) { }

	getQuery(query) {
		const url = `/api/10220843887864415/${query}`;
		return this.http.get(url);
	}

	getHeroesFirstList() {
		return this.getQuery('search/ant').pipe(map((data: any) => {
			this.heroesFirstList = data.results;
			return data.results;
		}));
	}

	getHeroes(term: string) {
		return this.getQuery(`search/${term}`).pipe(map((data: any) => {
			this.heroes = data.results;
			return data.results;
		}));
	}

	getHero(id) {
		return this.getQuery(`${id}`);
	}
}
