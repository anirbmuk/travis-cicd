import { UserModel } from '../model/user.model';

export class UserService {

  private users: UserModel[] = [];

  constructor() { }

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
