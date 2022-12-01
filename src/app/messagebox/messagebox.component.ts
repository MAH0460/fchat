import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css'],
})
export class MessageboxComponent implements OnInit {
  @Input() name: any;
  @Input() message: any;
  @Input() time: string = '';
  private namea: string = '';
  flag: boolean = true;
  constructor() {
    this.namea = sessionStorage.getItem('name')!;
  }

  ngOnInit(): void {
    this.flag = this.namea === this.name;
    console.log(this.flag, this.namea, this.name);
  }
}
