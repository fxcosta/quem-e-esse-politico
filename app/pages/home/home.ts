import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PoliticoService} from '../../services/politico';
import {DetailsPage} from '../details/details';

@Component({
	templateUrl: 'build/pages/home/home.html',
	providers: [PoliticoService]
})

export class HomePage {

	public foundPolicians;
	public username;

	constructor(private navCtrl: NavController, private politico: PoliticoService) {}

	getPolicians() {
		this.politico.getPolicians(this.username).subscribe(
			data => {
				// var arr = Object.keys(this.foundPolicians).map(function(k) { return this.foundPolicians[k] });
				this.foundPolicians = data.json();
				this.foundPolicians = this.foundPolicians.objects;

				// this.foundPolicians.forEach(function (current, index, value) {
					// console.log(current);
				// });

			},
			err => console.error(err),
			() => console.log('getRepos competed')
		);
	}

	goToDetails(polician) {
		this.navCtrl.push(DetailsPage, { polician: polician });
	}
}
