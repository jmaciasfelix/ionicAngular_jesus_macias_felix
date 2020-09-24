// nestjs
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CryptoProvider {

  /**
   * provider constructor
   *
   * @param jwtService nestjs jwt service
   */
  constructor(private readonly jwtService: JwtService) { }

  /**
   * sign payload to jwt
   *
   * @param payload payload to sign
   * @returns jwt
   */
  sign(payload: any) {
    return this.jwtService.sign(payload);
  }
}
