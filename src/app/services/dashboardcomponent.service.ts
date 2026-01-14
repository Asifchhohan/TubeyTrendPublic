import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopChannel } from '../shared/models/top-channel';

@Injectable({
  providedIn: 'root'
})
export class DashboardcomponentService {
    private getTopChannelsapiUrl = 'http://localhost:8002/api/Youtube/GetTopChannels';
  

  constructor(private http: HttpClient) { }


  getTopChannels(): Observable<TopChannel[]> {
    return this.http.get<TopChannel[]>(this.getTopChannelsapiUrl);
  }
}
