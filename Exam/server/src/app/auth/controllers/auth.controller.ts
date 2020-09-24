// nestjs
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiOkResponse,
  ApiTags,
  ApiTooManyRequestsResponse,
  ApiUnauthorizedResponse
} from '@nestjs/swagger';

// providers
import { AuthProvider } from '../providers';

// dtos
import { LoginDto, LoginResponseDto } from '../dtos';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

  /**
   * controller constructor
   *
   * @param authProvider auth provider
   */
  constructor(private readonly authProvider: AuthProvider) { }

  /**
   * login to API
   *
   * @param loginDto login dto
   * @returns http response
   */
  @ApiOperation({ summary: 'Login', description: 'Login to API' })
  @ApiOkResponse({ description: 'Login success', type: LoginResponseDto })
  @ApiBadRequestResponse({ description: 'Invalid request params' })
  @ApiUnauthorizedResponse({ description: 'Invalid email or password' })
  @ApiTooManyRequestsResponse({ description: 'Too many requests' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authProvider.login(loginDto.email, loginDto.password);
  }
}
