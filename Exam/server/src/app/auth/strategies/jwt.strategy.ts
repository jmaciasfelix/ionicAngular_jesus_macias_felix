// nestjs
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

// passport-jwt
import { ExtractJwt, Strategy } from 'passport-jwt';

// providers
import { AuthProvider } from '../providers';

// interfaces
import { JwtPayload } from '../interfaces';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  /**
   * strategy constructor
   *
   * @param authProvider auth provider
   */
  constructor(private readonly authProvider: AuthProvider) {

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'encuestas',
    });
  }

  /**
   * validate jwt payload
   *
   * @param jwtPayload jwt payload
   * @returns authenticated user
   */
  validate(jwtPayload: JwtPayload) {
    return this.authProvider.validateJwtPayload(jwtPayload);
  }
}
