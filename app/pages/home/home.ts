import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {PoliticoService} from '../../services/politico';
import {DetailsPage} from '../details/details';
import { Keyboard } from 'ionic-native';

@Component({
	templateUrl: 'build/pages/home/home.html',
	providers: [PoliticoService]
})

export class HomePage {

	public foundPolicians;
	public username;
	public estado;

	public pushPage = DetailsPage;

	constructor(
		public navCtrl: NavController, 
		private politico: PoliticoService,
		public loadingCtrl: LoadingController) {

		Keyboard.hideKeyboardAccessoryBar(true);
	}

	getPolicians() {
		let loading = this.loadingCtrl.create(
		{
			content: "Aguarde! Estamos procurando...",
		// 	duration: 5000,
			dismissOnPageChange: true
		}
		);


		this.navCtrl.push(loading.present());

		this.politico.getPolicians(this.username).subscribe(
			data => {
				this.foundPolicians = data.json();
				this.foundPolicians = this.foundPolicians.objects;
			},
			err => console.error(err),
			() => loading.dismiss() && console.log('ops')
			);
	}

	goToDetails(polician) {
		this.navCtrl.push(DetailsPage, { polician: polician });
	}
}
