// nestjs
import { ApiProperty } from '@nestjs/swagger';

// class-validator
import { IsNotEmpty, IsNumber } from 'class-validator';

export class VoteDto {

  @ApiProperty({
    description: 'Survey option id',
    type: 'number',
    example: 1
  })
  @IsNumber()
  @IsNotEmpty()
  readonly option: number;
}
