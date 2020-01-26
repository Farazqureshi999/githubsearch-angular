import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../../services/github.service';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]
})
export class GithubComponent implements OnInit {
    user: any;
    repos: any;
    username: any;
  constructor(private _https : GithubService) {

      }

  ngOnInit() {


  }

  loc( url: any ) {
    window.open(url.html_url, '_blank');
  }
  search() {
    this._https.updateUserName(this.username);
    this._https.getUser().subscribe(user => {
      this.user = user;
    });
    this._https.getRepo().subscribe( repo => {
      this.repos = repo;
    });

  }
}
