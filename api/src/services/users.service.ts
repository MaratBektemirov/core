import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { TokenService } from '@api/services/token.service';
import { Tables } from '@api/tables';
import { IUser } from '@interfaces/user';

import * as fs from 'fs';
import * as moment from 'moment';
import * as Handlebars from 'handlebars';
import * as pdf from 'html-pdf';
import { IRealty } from '@interfaces/realty';
import { template } from '@utils/template';

@Injectable()
export class UsersService {

  constructor(private db: DbService, private tokenService: TokenService) {
  }

  public async getUserRoles(userId: number) {
    return this.db.find(Tables.userRole, {userId});
  }

  public async getUserByTokenId(tokenId: string) {
    const token = await this.tokenService.getToken(tokenId);

    if (token) {
      const res = await this.db.find(Tables.user, {id: token.userId});

      return res[0];
    } else {
      throw new BadRequestException('User not found');
    }
  }

  public createAgreement(owner: IUser, customers: IUser[], realty: IRealty, res) {
    const options = {
      format: 'A4',
      orientation: 'portrait',
      border: '10mm'
    };

    const DateFormats = {
      short: 'DD.MM.YYYY',
    };

    const document = {
      html: template(),
      data: {
        owner: owner,
        customers: customers,
        realty: realty,
        realtyPrice: realty.space * realty.pricePerSpaceItem,
        today: new Date(),
        'formatDate': function (datetime, format) {
          if (moment) {
            format = DateFormats[format] || format;

            return moment(datetime).format(format);
          } else {
            return datetime;
          }

        }
      },
      // path: path
    };

    const html = Handlebars.compile(document.html)(document.data);

    pdf.create(html, options).toStream(function(err, stream) {
      stream.pipe(res);
    });
  }
}
