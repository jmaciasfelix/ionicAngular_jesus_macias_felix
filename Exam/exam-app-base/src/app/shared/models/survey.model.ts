import { SurveyBase } from "./survey-base.model";

export interface Survey extends SurveyBase {
  // TODO: Another Survey fields (already has id and options from SurveyBase)
  title: string;
  statement: string;
  answered: boolean;
}
