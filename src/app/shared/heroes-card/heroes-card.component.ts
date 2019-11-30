import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-heroes-card',
	templateUrl: './heroes-card.component.html',
	styles: []
})
export class HeroesCardComponent implements OnInit {
	@Input() heroes: any[] = [];
	@Input() page = '';
	@Input() term = '';
	constructor( private route: Router ) {  }

	ngOnInit() {
	}

	heroView(id, page, term?) {
		console.log(this.term);
		if (term) {
			this.route.navigate([ '/hero', id, page, term ]);
		} else {
			console.log('Dentro');
			this.route.navigate([ '/hero', id, page ]);
		}
	}

}
