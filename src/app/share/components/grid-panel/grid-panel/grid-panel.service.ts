import { Injectable, EventEmitter } from '@angular/core';
import {HttpService} from '../../../service/http.service';
import 'rxjs/add/operator/timeout';

@Injectable()
export class GridPanelService {

  // 行事件
  rowEvent: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpService) {
  }

  getData(method: string, url: string, params?: any) {
    return this.http.get(url, params);

  }


}
