import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from './service/user.service';
import { FirebaseService } from './service/firebase.service';

import { UserModel } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'travis-cicd';
  users: UserModel[];
  user: UserModel;
  messageFromCloud: string;

  constructor(private userService: UserService, private firebase: FirebaseService, private http: HttpClient) {}

  ngOnInit(): void {
    this.buildUserList();
  }

  public selectUser(user: UserModel): void {
    this.user = user;
  }

  public callCloudFunction(): void {
    this.http.get<{ message: string }>('https://us-central1-travis-cicd.cloudfunctions.net/autocicd')
    .subscribe(output => {
      this.messageFromCloud = output.message;
    }, (error: any) => {
      console.error(error);
      this.messageFromCloud = 'Error in cloud function';
    });
  }

  private buildUserList(): void {
    const user1 = new UserModel(1001, 'Mr', 'John', 'Doe', 'Male', 'JOHNDOE', new Date(378153000000));
    this.userService.addUser(user1);
    const user2 = new UserModel(1002, 'Mrs', 'Erin', 'Love', 'Female', 'ERINLOVE', new Date(33157800000));
    this.userService.addUser(user2);
    const user3 = new UserModel(1003, 'Mr', 'Michael', 'Lowe', 'Male', 'MIKELOWE', new Date(4991400000));
    this.userService.addUser(user3);
    const user4 = new UserModel(1004, 'Mr', 'Stephen', 'Fry', 'Male', 'STEPHFRY', new Date(301948200000));
    this.userService.addUser(user4);

    this.users = this.userService.getUsers();
  }
}
