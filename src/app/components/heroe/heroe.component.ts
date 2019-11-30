import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
	selector: 'app-heroe',
	templateUrl: './heroe.component.html',
	styles: []
})
export class HeroeComponent implements OnInit {
	hero: object;
	page: string;
	termSearch: string;
	loading = true;
	constructor(
		private heroesService: HeroesServiceService,
		private activedRoute: ActivatedRoute
	) {
		this.activedRoute.params.subscribe(
			params => {
				this.page = params.page;
				if (params.term) {
					this.termSearch = params.term;
				}
				this.heroesService.getHero(params.id).subscribe(
					heroeData => {
						this.hero = heroeData;
						this.loading = false;
					}
				);
			}
		);
	}

	ngOnInit() {
	}



}
