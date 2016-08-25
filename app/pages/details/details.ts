import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PoliticoService } from '../../services/politico';

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

    constructor(private navCtrl: NavController,
      private github: PoliticoService,
      private navParams: NavParams) {

      this.polician = navParams.get('polician');

      console.log(this.polician);

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

  }
