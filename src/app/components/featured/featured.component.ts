import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit() {
  }

}
