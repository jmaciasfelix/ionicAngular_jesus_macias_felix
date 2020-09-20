import { Injectable } from '@angular/core';

@Injectable()
export class LabelsService {

  constructor() {

  }

  public getLabels(): string[] {

    return [
      'Family',
      'Friends',
      'Notes',
      'Work',
      'Travel',
      'Reminders'
    ];
  }
}
