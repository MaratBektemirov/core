import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

moment.locale('ru');
window['moment'] = moment;

@Pipe({name: 'moment'})
export class MomentPipe implements PipeTransform {
  transform(date: Date): moment.Moment {
    return moment(date);
  }
}
