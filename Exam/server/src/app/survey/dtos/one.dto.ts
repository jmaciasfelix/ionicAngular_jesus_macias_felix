// nestjs
import { ApiProperty } from '@nestjs/swagger';

export class OneDto {

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
    description: 'Survey statement',
    type: 'string',
    example: 'Example statement'
  })
  readonly statement: string;

  @ApiProperty({
    description: 'Survey options',
    isArray: true,
    example: [{
      id: 1,
      value: 'Value 1',
      num_votes: 2
    }]
  })
  readonly options: {
    readonly id: number;
    readonly value: string;
    readonly num_votes: number;
  }[];

  @ApiProperty({
    description: 'Value answered by the user',
    type: 'number',
    example: 1
  })
  readonly answered: number;
}
