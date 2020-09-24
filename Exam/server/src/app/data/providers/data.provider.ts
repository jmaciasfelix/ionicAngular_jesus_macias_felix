// nestjs
import { Injectable } from '@nestjs/common';

// node
import { join } from 'path';

// interfaces
import { Survey, User } from '../interfaces';

@Injectable()
export class DataProvider {
  users: User[];
  surveys: Survey[];

  /**
   * provider constructor
   */
  constructor() {
    this.initializeDataFromJson();
  }

  /**
   * initialize data from json
   */
  private initializeDataFromJson() {
    const dataJson = require(join(process.cwd(), 'data.json'));
    this.users = dataJson.users;

    this.surveys = (dataJson.surveys as Survey[]).map(surveyMap => ({
      ...surveyMap,
      options: surveyMap.options.map(optionMap => ({
        ...optionMap,
        users: []
      }))
    }));
  }
}
