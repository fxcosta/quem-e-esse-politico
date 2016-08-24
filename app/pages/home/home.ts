import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PoliticoService} from '../../services/politico';

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
				this.foundPolicians = data.json();
				console.log(this.foundPolicians);
			},
			err => console.error(err),
			() => console.log('getRepos competed')
		);
	}
}
