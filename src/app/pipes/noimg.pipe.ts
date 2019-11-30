import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimg'
})
export class NoimgPipe implements PipeTransform {

	transform(img: any): string {
		if (!img) {
			return 'assets/img/noimg.jpg';
		} else {
			return img;
		}

	}

}
