import { Component, OnInit } from '@angular/core';
import { IPost } from '../interfaces/i-post';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
})
export class AboutAppComponent implements OnInit {

  posts: IPost[] = [{
    caption: 'Project description',
    text: `This project is created to control your smart home.
You can play with mock data or specify your smart-home web server to control actual devices`
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
