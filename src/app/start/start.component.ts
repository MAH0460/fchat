import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  public name: string = '';
  constructor(private api: ClientService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    if (this.name !== '') {
      this.api.enterUser({ name: this.name }).subscribe((data: any) => {
        sessionStorage.setItem('name', this.name.toLowerCase());
        this.router.navigateByUrl('chat');
      });
    }
  }
}
