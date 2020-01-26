import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../../services/github.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  constructor(private _https:GithubService) { }

  ngOnInit() {
    this._https.getAllUser().subscribe(user => {
        this.user=user;
    });
  }

}
