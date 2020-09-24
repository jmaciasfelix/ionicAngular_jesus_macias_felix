// nestjs
import { ApiProperty } from '@nestjs/swagger';

export class ListDto {

  @ApiProperty({
    description: 'Survey id',
    type: 'number',
    example: 1
  })
  readonly id: number;

  @ApiProperty({
    description: 'Survey title',
    type: 'string',
    example: 'Survey title'
  })
  readonly title: string;

  @ApiProperty({
    description: 'Has the user answered the survey?',
    type: 'boolean',
    example: true
  })
  readonly answered: boolean;
}
