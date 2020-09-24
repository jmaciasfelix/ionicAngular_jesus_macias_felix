// nestjs
import { ApiProperty } from '@nestjs/swagger';

export class SuccessDto {

  @ApiProperty({
    description: 'Response message',
    type: 'string',
    example: 'Ok'
  })
  readonly message: string;
}
