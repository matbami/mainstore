import { NextFunction, Request, Response } from 'express';
import { LoginInterface, UserInterface } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';

class AuthController {
  public authService = new AuthService();

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: UserInterface = req.body;
      const signUpUserData: UserInterface = await this.authService.signUp(userData);

      res.status(201).json({ message: 'User Signup successfully', data: signUpUserData });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: LoginInterface = req.body;
      const user = await this.authService.login(userData);

      res.status(200).json({message: 'Login succesful' , data: user});
    } catch (error) {
      next(error);
    }
  };


  // HOLD ON FOR LOGOUT
  // public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  //   try {
  //     const userData: UserInterface = req.user;
  //     const logOutUserData: UserInterface = await this.authService.logout(userData);

  //     res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
  //     res.status(200).json({ data: logOutUserData, message: 'logout' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default AuthController;
