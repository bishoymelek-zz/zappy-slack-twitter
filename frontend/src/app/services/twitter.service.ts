import { Injectable, EventEmitter } from '@angular/core';
import { BaseService } from './base.service';
import { tap, map } from 'rxjs/operators';

import { ServerResponse } from '../interfaces/server-response';
@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  constructor(
    public base: BaseService
  ) { }
  resultData: any;
  fetchTweets() {
    return this.base.get('twitter/all-tweets')
  }
}
