// nestjs
import { Injectable, UnauthorizedException } from '@nestjs/common';

// @encuestas packages
import { CryptoProvider } from '@encuestas/crypto';
import { DataProvider } from '@encuestas/data';

// interfaces
import { JwtPayload } from '../interfaces';

@Injectable()
export class AuthProvider {

  /**
   * provider constructor
   *
   * @param cryptoProvider crypto provider
   * @param dataProvider data provider
   */
  constructor(
    private readonly cryptoProvider: CryptoProvider,
    private readonly dataProvider: DataProvider) { }

  /**
   * login to API
   *
   * @param email user email
   * @param password user password
   * @returns user access token
   */
  login(email: string, password: string) {
    const user = this.dataProvider.users.find(findUser => findUser.email === email && findUser.password === password);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return { access_token: this.cryptoProvider.sign({ id: user.id }) };
  }

  /**
   * validate jwt payload
   *
   * @param jwtPayload jwt payload
   * @returns authenticated user
   */
  validateJwtPayload(jwtPayload: JwtPayload) {
    const user = this.dataProvider.users.find((findUser) => findUser.id === jwtPayload.id);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return user;
  }
}
