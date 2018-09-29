import { Component, OnInit } from '@angular/core';
import { TwitterService } from './services/twitter.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private twitterS: TwitterService) { }
  tweetsLoaded: any;
  ngOnInit() {
    let f = this.twitterS.fetchTweets()
      .subscribe(result => {
        console.log(result.data);
        this.tweetsLoaded = result.data;
      });
  }
}
