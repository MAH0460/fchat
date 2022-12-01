import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  public enterUser(data: any) {
    return this.http.post('http://localhost:8082/createUser', data);
  }

  public sendMessage(data: any) {
    return this.http.post('http://localhost:8082/sendMessage', data);
  }

  public getMessages() {
    return this.http.get('http://localhost:8082/getMessages');
  }
}
