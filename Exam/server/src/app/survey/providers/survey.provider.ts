// nestjs
import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway } from '@nestjs/websockets';

// ws
import { Server } from 'ws';

// @encuestas packages
import { DataProvider } from '@encuestas/data';

@WebSocketGateway(3030, { namespace: 'votes' })
@Injectable()
export class SurveyProvider implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly wsClients: WebSocket[] = [];

  /**
   * provider constructor
   *
   * @param dataProvider data provider
   */
  constructor(private readonly dataProvider: DataProvider) { }

  /**
   * handle client connection
   *
   * @param client websocket client
   */
  handleConnection(client: WebSocket) {
    this.wsClients.push(client);
  }

  /**
   * handle client disconnection
   *
   * @param client websocket client
   */
  handleDisconnect(client: WebSocket) {
    this.wsClients.splice(this.wsClients.indexOf(client));
  }

  /**
   * get surveys list
   *
   * @param userId authenticated user id
   * @returns surveys list
   */
  getList(userId: number) {

    return this.dataProvider.surveys.map(surveyMap => {
      const { options, statement, ...smallSurvey } = surveyMap;
      const answered = options.find(optionFind => optionFind.users.includes(userId));

      return {
        ...smallSurvey,
        answered: !!answered
      };
    });
  }

  /**
   * get one survey
   *
   * @param surveyId survey id
   * @param userId authenticated user id
   * @returns survey
   */
  getOne(surveyId: number, userId: number) {

    if (isNaN(surveyId)) {
      throw new BadRequestException('Invalid survey id');
    }

    const survey = this.dataProvider.surveys.find(surveyFind => surveyFind.id === surveyId);

    if (!survey) {
      throw new NotFoundException('Survey not found');
    }

    const optionAnswered = survey.options.find(optionFind => optionFind.users.includes(userId));

    return {
      ...survey,
      options: survey.options.map(optionMap => {
        const { users, ...optionWithoutUsers } = optionMap;

        return {
          ...optionWithoutUsers,
          num_votes: users.length
        };
      }),
      answered: optionAnswered ? optionAnswered.id : null
    };
  }

  /**
   * vote in a survey
   *
   * @param surveyId survey id
   * @param optionId option id
   * @param userId authenticated user id
   * @returns votation status
   */
  vote(surveyId: number, optionId: number, userId: number) {

    if (isNaN(surveyId)) {
      throw new BadRequestException('Invalid survey id');
    }

    const surveyIndex = this.dataProvider.surveys.findIndex(surveyFind => surveyFind.id === surveyId);

    if (surveyIndex === -1) {
      throw new NotFoundException('Survey not found');
    }

    const optionIndex = this.dataProvider.surveys[surveyIndex].options.findIndex(optionFind => optionFind.id === optionId);

    if (optionIndex === -1) {
      throw new NotFoundException('Option not found');
    }

    if (this.dataProvider.surveys[surveyIndex].options[optionIndex].users.includes(userId)) {
      throw new ConflictException('Survey already answered');
    }

    this.dataProvider.surveys[surveyIndex].options[optionIndex].users.push(userId);

    const votes = this.calculateVotes();
    this.wsClients.forEach(wsClient => wsClient.send(JSON.stringify(votes)));
    return { message: 'Vote saved' };
  }

  /**
   * retract a vote
   *
   * @param surveyId survey id
   * @param userId authenticated user id
   * @returns result of retractation
   */
  retractVote(surveyId: number, userId: number) {

    if (isNaN(surveyId)) {
      throw new BadRequestException('Invalid survey id');
    }

    const surveyIndex = this.dataProvider.surveys.findIndex(surveyFind => surveyFind.id === surveyId);

    if (surveyIndex === -1) {
      throw new NotFoundException('Survey not found');
    }

    const optionIndex = this.dataProvider.surveys[surveyIndex].options.findIndex(optionFind => optionFind.users.includes(userId));

    if (optionIndex === -1) {
      throw new ConflictException('Survey not answered yet');
    }

    const userOption = this.dataProvider.surveys[surveyIndex].options[optionIndex].users.indexOf(userId);
    this.dataProvider.surveys[surveyIndex].options[optionIndex].users.splice(userOption);
    const votes = this.calculateVotes();
    this.wsClients.forEach(wsClient => wsClient.send(JSON.stringify(votes)));
    return { message: 'Vote deleted' };
  }

  /**
   * calculate num votes
   *
   * @returns surveys with num votes
   */
  private calculateVotes() {

    return this.dataProvider.surveys.map(surveyMap => ({
      id: surveyMap.id,
      options: surveyMap.options.map(optionMap => ({
        id: optionMap.id,
        num_votes: optionMap.users.length
      }))
    }));
  }
}
