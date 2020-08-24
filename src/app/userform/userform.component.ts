import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fromUIName: string = '';
  fromUIEmail: string = '';

  onClickSubmit(name: string, email: string) {
    this.fromUIName = name;
    this.fromUIEmail = email;
  }
}
