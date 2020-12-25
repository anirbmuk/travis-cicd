import { Injectable } from '@angular/core';

import { UserModel } from '../model/user.model';

@Injectable()
export class UserService {

  private users: UserModel[] = [];

  constructor() {
    const user1 = new UserModel(1001, 'Mr', 'John', 'Doe', 'Male', 'JOHNDOE', new Date(378153000000));
    this.addUser(user1);
    const user2 = new UserModel(1002, 'Mrs', 'Erin', 'Love', 'Female', 'ERINLOVE', new Date(33157800000));
    this.addUser(user2);
    const user3 = new UserModel(1003, 'Mr', 'Michael', 'Lowe', 'Male', 'MIKELOWE', new Date(4991400000));
    this.addUser(user3);
    const user4 = new UserModel(1004, 'Mrs', 'Jelena', 'Stankowic', 'Female', 'JELESTAN', new Date(-149923800000));
    this.addUser(user4);
    const user5 = new UserModel(1005, 'Mr', 'Alex', 'Heather', 'Male', 'ALEXHEAT', new Date(166127400000));
    this.addUser(user5);
  }

  public getUsers(): UserModel[] {
    return [...this.users];
  }

  public addUser(user: UserModel): void {
    this.users.push(user);
  }

  public clearUsers(): void {
    this.users = [];
  }
}
