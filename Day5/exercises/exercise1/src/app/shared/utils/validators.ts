import { AbstractControl } from '@angular/forms';

const temporalDomains: string[] = ['yopmail.com', '10minutesmail.com', 'patata.com'];

export const isNotTemporalEmailValidator = (control: AbstractControl) => {
  if (temporalDomains.some((domain) => control.value?.endsWith(`@${domain}`))) {
    return { isNotTemporalEmail: true };
  }
};
