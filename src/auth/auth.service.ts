import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return { msg: 'user logged in!' };
  }

  signunp() {
    return { msg: 'user signed up!' };
  }
}
