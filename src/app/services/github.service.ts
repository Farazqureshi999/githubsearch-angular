import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username = 'brad';
  private client_id = '92cb45cb887a14ff5147';
  private client_secret = 'e24e130b8350807fe61d12138f0959b6ef3a141f';
  constructor(private _http: Http) {
      console.log('Github Service start');
  }

  getUser(): Observable <Response> {
    // tslint:disable-next-line: max-line-length
    return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).pipe(map(res => res.json()));
}

getRepo(): Observable <Response>{
  // tslint:disable-next-line: max-line-length
  return this._http.get('https://api.github.com/users/' + this.username + '/repos' + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).pipe(map(res => res.json()));
}

  updateUserName(username: any) {
        this.username = username;
  }

  getAllUser(): Observable <Response> {
    // tslint:disable-next-line: max-line-length
    return this._http.get('https://api.github.com/users').pipe(map(res => res.json()));

  }
}
