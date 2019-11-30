import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styles: []
})
export class SearchComponent implements OnInit {
	searchTerm: string;
	loading = false;
	constructor(
		private heroesService: HeroesServiceService,
		private route: Router,
		private activedRoute: ActivatedRoute
	) { }

	ngOnInit() {
		this.searchTerm = '';
		this.heroesService.heroes = [];
		this.activedRoute.params.subscribe(
			params => {
				if (params.term) {
					this.searchTerm = params.term;
					this.search();
				}
			}
		);
	}

	sendTerm() {
		if (this.searchTerm.length === 0) {
			return;
		}
		this.heroesService.heroes = [];
		this.route.navigate(['search', this.searchTerm]);
		this.search();
	}

	search() {
		this.loading = true;
		this.heroesService.getHeroes(this.searchTerm).subscribe(
			heroesList => {
				this.loading = false;
			}
		);
	}

}
