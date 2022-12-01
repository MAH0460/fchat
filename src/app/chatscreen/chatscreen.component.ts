import { ClientService } from '../client.service';
import {
  Component,
  OnInit,
  AfterViewChecked,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-chatscreen',
  templateUrl: './chatscreen.component.html',
  styleUrls: ['./chatscreen.component.css'],
})
export class ChatscreenComponent implements OnInit {
  @ViewChild('chatarea') private myscroller: ElementRef | any;
  public name: string = '';
  message: string = '';
  messages = [
    { name: 'Harshu', time: '01:00', message: 'Hello' },
    { name: 'Aashu', time: '01:00', message: 'Hii' },
  ];
  mySubscription: Subscription;
  constructor(private api: ClientService) {
    this.name = sessionStorage.getItem('name')!;
    this.mySubscription = interval(1000).subscribe((x) => {
      this.callApi();
    });
    this.scrollToBottom();
  }

  ngOnInit(): void {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myscroller.nativeElement.scrollTop =
        this.myscroller.nativeElement.scrollHeight;
    } catch (err) {}
  }
  callApi() {
    this.api.getMessages().subscribe((data: any) => {
      this.messages = data;
    });
  }

  onSend() {
    if (this.message !== '') {
      const data = { user: this.name, message: this.message };
      this.api.sendMessage(data).subscribe((data: any) => {
        console.log('success');
        this.message = '';
      });
    }
  }
}
