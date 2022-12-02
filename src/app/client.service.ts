import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  public enterUser(data: any) {
    return this.http.post(
      'https://c09rlcfpr9.execute-api.ap-south-1.amazonaws.com/createUser',
      data
    );
  }

  public sendMessage(data: any) {
    return this.http.post(
      'https://c09rlcfpr9.execute-api.ap-south-1.amazonaws.com/sendMessage',
      data
    );
  }

  public getMessages() {
    return this.http.get(
      'https://c09rlcfpr9.execute-api.ap-south-1.amazonaws.com/getMessages'
    );
  }
}
