// nestjs
import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {

  @ApiProperty({
    description: 'User access token',
    type: 'string',
    example: 'my_access_token'
  })
  readonly access_token: string;
}
