import { Request } from 'express';
import { UserInterface } from '@interfaces/users.interface';

export interface DataStoredInToken {
  _id: string;
}

export interface TokenData {
  token: string;
}

export interface RequestWithUser extends Request {
  user: UserInterface;
}
