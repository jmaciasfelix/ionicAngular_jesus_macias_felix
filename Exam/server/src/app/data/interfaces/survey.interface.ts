// interfaces
import { Option } from './option.interface';

export interface Survey {
  readonly id: number;
  readonly title: string;
  readonly statement: string;
  readonly options: Option[];
}
