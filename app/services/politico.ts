import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Github provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
    */
  @Injectable()
  export class PoliticoService {

    constructor(private http: Http) {}

    getPolicians(username) {
      let policians = this.http.get(`http://politicos.olhoneles.org:80/api/v0/politicians/search/?q=${username}`);
      return policians;
    }

    
    filterByState(data, state) {
      var newData = [];

      newData = data.filter(function (data) {
        return data.state.name === state;
      });

      return newData;
    }

    getDetails(repo) {
      let headers = new Headers();
      headers.append('Accept', 'application/vnd.github.VERSION.html');

      return this.http.get(`${repo.url}/readme`, { headers: headers});
    }
  }

