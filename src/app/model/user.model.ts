export class UserModel {

  private userId: number;
  private salutation: string;
  private firstName: string;
  private lastName: string;
  private gender: string;
  private email: string;
  private dateOfBirth: Date;

  constructor(userId: number, salutation: string, firstName: string, lastName: string, gender: string, email: string, dateOfBirth: Date) {
    this.userId = userId;
    this.salutation = salutation;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.dateOfBirth = dateOfBirth || new Date('1-1-1970');
  }

  public getUserId(): number {
    return this.userId;
  }

  public getSalutation(): string {
    return this.salutation;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getGender(): string {
    return this.gender;
  }

  public getEmail(): string {
    return this.email;
  }

  public getDateOfBirth(): Date {
    return this.dateOfBirth;
  }

}
