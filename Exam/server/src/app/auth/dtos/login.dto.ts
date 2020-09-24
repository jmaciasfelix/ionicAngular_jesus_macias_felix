// nestjs
import { ApiProperty } from '@nestjs/swagger';

// class-validator
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User email',
    type: 'string',
    format: 'email',
    example: 'example@example.com'
  })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User password',
    type: 'string',
    example: 'password'
  })
  readonly password: string;
}
