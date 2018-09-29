import { Injectable } from '@angular/core';
// import { tap ,map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { gVars } from '../vars';
import { ServerResponse } from '../interfaces/server-response'

@Injectable()

export class BaseService {
  constructor(
    private http: HttpClient,
  ) { }

  get(url) {
    return this.http.get<ServerResponse>(gVars.baseUrl + url)
  }
}
