import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';
import { Hero } from 'src/app/model/hero.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styles: []
})
export class SearchComponent implements OnInit {
	searchTerm: string;
	loading = false;
	constructor(
		public heroesService: HeroesServiceService,
		private route: Router,
		private activedRoute: ActivatedRoute
	) { }

	ngOnInit() {
		this.searchTerm = '';
		this.activedRoute.params.subscribe(
			params => {
				if (params.term) {
					this.searchTerm = params.term;
					if (this.heroesService.heroesSearched.length > 0) {
						return;
					}
					this.search();
				}
			}
		);
	}

	sendTerm() {
		if (this.searchTerm.length === 0) {
			return;
		}

		this.heroesService.heroesSearched = [];
		// this.route.navigate(['search', this.searchTerm]);
		this.search();
	}

	search() {
		this.loading = true;
		this.heroesService.searchHeroes(this.searchTerm).subscribe(() => this.loading = false);
	}

}
