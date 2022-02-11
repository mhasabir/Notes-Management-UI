export interface IUserRegistration {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: Date;
}
export class UserRegistration implements IUserRegistration {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  dateOfBirth: Date = new Date();
}
export interface IUser {
  userId: number;
  name: string;
  email: string;
  dateOfBirth: Date;
}
