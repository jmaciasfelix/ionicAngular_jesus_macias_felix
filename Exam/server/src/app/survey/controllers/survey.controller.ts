// nestjs
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiOkResponse,
  ApiTags,
  ApiTooManyRequestsResponse,
  ApiUnauthorizedResponse
} from '@nestjs/swagger';

// express
import { Request } from 'express';

// providers
import { SurveyProvider } from '../providers';

// dtos
import { ListDto, OneDto, SuccessDto, VoteDto } from '../dtos';

@ApiTags('Survey')
@UseGuards(AuthGuard('jwt'))
@Controller('survey')
export class SurveyController {

  /**
   * controller constructor
   *
   * @param surveyProvider survey provider
   */
  constructor(private readonly surveyProvider: SurveyProvider) { }

  /**
   * get surveys list
   *
   * @param request express request
   * @returns surveys list
   */
  @ApiOperation({ summary: 'List', description: 'Get surveys list' })
  @ApiOkResponse({ description: 'Surveys list returned', isArray: true, type: ListDto })
  @ApiUnauthorizedResponse({ description: 'Invalid access token' })
  @ApiTooManyRequestsResponse({ description: 'Too many requests' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Get()
  getList(@Req() request: Request) {
    return this.surveyProvider.getList((request as any).user.id as number);
  }

  /**
   * get survey
   *
   * @param idString survey id as string
   * @param request express request
   * @returns survey
   */
  @ApiOperation({ summary: 'Get one', description: 'Get one survey' })
  @ApiOkResponse({ description: 'Survey returned', type: OneDto })
  @ApiBadRequestResponse({ description: 'Invalid request params' })
  @ApiUnauthorizedResponse({ description: 'Invalid access token' })
  @ApiNotFoundResponse({ description: 'Survey not found' })
  @ApiTooManyRequestsResponse({ description: 'Too many requests' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getOne(@Param('id') idString: string, @Req() request: Request) {
    return this.surveyProvider.getOne(parseInt(idString, 10), (request as any).user.id as number);
  }

  /**
   * vote in a survey
   *
   * @param idString survey id as string
   * @param voteDto vote dto
   * @param request express request
   * @returns result of votation
   */
  @ApiOperation({ summary: 'Vote', description: 'Vote in a survey' })
  @ApiOkResponse({ description: 'Vote saved', type: SuccessDto })
  @ApiBadRequestResponse({ description: 'Invalid request params' })
  @ApiUnauthorizedResponse({ description: 'Invalid access token' })
  @ApiNotFoundResponse({ description: 'Survey or option not found' })
  @ApiConflictResponse({ description: 'Survey already answered' })
  @ApiTooManyRequestsResponse({ description: 'Too many requests' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Post(':id')
  vote(@Param('id') idString: string, @Body() voteDto: VoteDto, @Req() request: Request) {
    return this.surveyProvider.vote(parseInt(idString, 10), voteDto.option, (request as any).user.id as number);
  }

  /**
   * retract a vote
   *
   * @param idString survey id as string
   * @param request express request
   * @returns result of retractation
   */
  @ApiOperation({ summary: 'Retract a vote', description: 'Retract a vote of a survey' })
  @ApiOkResponse({ description: 'Vote retracted', type: SuccessDto })
  @ApiBadRequestResponse({ description: 'Invalid request params' })
  @ApiUnauthorizedResponse({ description: 'Invalid access token' })
  @ApiNotFoundResponse({ description: 'Survey not found' })
  @ApiConflictResponse({ description: 'Survey not answered yet' })
  @ApiTooManyRequestsResponse({ description: 'Too many requests' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  retractVote(@Param('id') idString: string, @Req() request: Request) {
    return this.surveyProvider.retractVote(parseInt(idString, 10), (request as any).user.id as number);
  }
}
