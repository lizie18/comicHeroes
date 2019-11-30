import { Component, OnInit } from '@angular/core';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styles: []
})
export class HomeComponent implements OnInit {
	loading = false;
	constructor( private heroesServices: HeroesServiceService ) { }

	ngOnInit() {
		if (this.heroesServices.heroes.length <= 0) {
			this.loading = true;
			this.heroesServices.getHeroesFirstList().subscribe(
				heroesList => {
					this.loading = false;
				}
			);
		}
	}

}
