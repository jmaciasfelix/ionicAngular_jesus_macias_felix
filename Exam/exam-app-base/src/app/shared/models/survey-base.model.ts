import { SurveyOption } from './survey-option.model';

export interface SurveyBase {
  id: number;
  options: SurveyOption[];
}
