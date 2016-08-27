import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PoliticoService } from '../../services/politico';
import { HomePage } from '../home/home';

/*
  Generated class for the DetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
    templateUrl: 'build/pages/details/details.html',
    providers: [PoliticoService]
  })

  export class DetailsPage {
    public readme = '';
    public polician;

    constructor(
      public navCtrl: NavController,
      private github: PoliticoService,
      private navParams: NavParams) {


      this.polician = navParams.get('polician');

      // this.github.getDetails(this.polician).subscribe(
      //   data => {
      //     this.readme = data.text()
      //     console.log(this.polician);
      //   },
      //   err => {
      //     if (err.status === 404) {
      //       this.readme = 'This repo does not have a README. =(';
      //     } else {
      //       console.error(err);
      //     }
      //   },
      //   () => console.log('getDetails completed')
      //   );
    }

    goBack() {
      this.navCtrl.push(HomePage);
    }

  }
