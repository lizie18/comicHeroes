export class Hero {
	constructor(
		public biography: {
			'aliases': string[],
			'alignment': string,
			'alter-egos': string,
			'first-appearance': string,
			'full-name': string,
			'place-of-birth': string,
			'publisher': string
		},
		public id: string,
		public image: {
			'url': string
		},
		public name: string,
		public powerstats: {
			'combat': string,
			'durability': string,
			'intelligence': string,
			'power': string,
			'speed': string,
			'strength': string
		}
	) {}
}
