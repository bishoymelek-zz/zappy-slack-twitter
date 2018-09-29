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
  httpDone: boolean;
  foundTweets: boolean;
  errorMsg: any;
  ngOnInit() {
    let f = this.twitterS.fetchTweets()
      .subscribe(
        (result) => {
          // console.log(result.data);
          this.httpDone = true;
          if (result.data) {
            this.foundTweets = true;
          }
          this.tweetsLoaded = result.data;
        },
        (error) => {
          this.errorMsg = 'sorry it seems that the server is down!';

          this.httpDone = false;
          console.log(error)
        }
      );
  }
}
