import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(
      private userService: UserService,
  ) { }

  user  = null;

  ngOnInit() {
    this.userService.me().subscribe(user => {
      this.user = user;
    })
  }

}
