import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from './service/user.service';
import { FunctionService } from './service/function.service';

import { UserModel } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  title = 'travis-cicd';
  users: UserModel[];
  user: UserModel;
  autocicdFunctionCall$: Observable<string>;

  constructor(private userService: UserService, private functions: FunctionService) {}

  ngOnInit(): void {
    this.buildUserList();
    this.autocicdFunctionCall$ = this.functions.autocicdFunctionCall$;
  }

  public selectUser(user: UserModel): void {
    this.user = user;
  }

  public callCloudFunction(): void {
    this.functions.onClick('next');
  }

  private buildUserList(): void {
    this.users = this.userService.getUsers();
  }
}
