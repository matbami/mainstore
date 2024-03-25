import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '../config';
import { HttpException } from '../exceptions/HttpException';
import { DataStoredInToken, TokenData } from '../interfaces/auth.interface';
import { LoginInterface, UserInterface } from '../interfaces/users.interface';
import userModel from '../models/users.model';
import { isEmpty } from '../utils/util';

class AuthService {
  public users = userModel;
  public async signUp(userData: UserInterface): Promise<{ user: UserInterface; token }> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: UserInterface = await this.users.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);

    const user: UserInterface = await this.users.create({ ...userData, password: hashedPassword });
    const token = this.createToken(user);
    return { user, token };
  }

  public async login(userData: LoginInterface): Promise<{ user: LoginInterface; token: TokenData }> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');
    const user: UserInterface = await this.users.findOne({ email: userData.email });
    if (!user) throw new HttpException(409, `This email ${userData.email} was not found`);

    const isPasswordMatching: boolean = await compare(userData.password, user.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Password is not matching');

    const token = this.createToken(user);
    user.token = token;

    return { user, token };
  }

  public createToken(user: UserInterface): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }
}

export default AuthService;
