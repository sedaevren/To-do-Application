import { DateModel } from 'ng2-datepicker';

export class Todo {

  id: number;
  title: string = '';
  complete: boolean = false;
  cancel: boolean = false;
  startDate: Date;
  dueDate: Date;
  dueTime: TimeRanges;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
