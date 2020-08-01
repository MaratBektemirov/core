import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class HelpersService {
  public objToCamelCase(obj: any) {
    const res = {};

    for (const key of Object.keys(obj)) {
      res[_.camelCase(key)] = obj[key];
    }

    return res;
  }
}
