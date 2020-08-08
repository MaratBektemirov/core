import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { TokenService } from '@api/services/token.service';
import { Tables } from '@api/tables';
import { IUser } from '@interfaces/user';

import * as moment from 'moment';
import * as Handlebars from 'handlebars';
import * as pdf from 'html-pdf';
import NodeRSA from 'node-rsa';
import { IRealty } from '@interfaces/realty';
import { template } from '@utils/template';

// tslint:disable-next-line:no-require-imports
const fs = require('fs').promises;


@Injectable()
export class UsersService {

  constructor(private db: DbService, private tokenService: TokenService) {
    // this.verifySignature(
    //   '/home/iskandar/Desktop/hackaton/core/crypto/hello',
    //   'HF0/HLSCCzEO5Mh+s4Yjr2tKHs0ieUek4PCi8SteVYw+7rAsayMb+08caz9/PmqXuPyiIEMShPYvi0/pjJoTpg==',
    //   '-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANf3eSbnAWPwylSnbHfL7CttJ6I/ZL8iDCcl62/roZeFf9gcgIyB5rmjqME+AnQ8ETTDSSo5NcFOJQ91laYPdlMCAwEAAQ==-----END PUBLIC KEY-----').then((data) => console.log(data));
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

  async readFile(pathToFile) {
    const data = await fs.readFile(pathToFile);

    return new Buffer(data);
  }

  public async verifySignature(pathToFile, b64signature, publicKey) {
    const key = new NodeRSA(publicKey);
    const fileBuffer = await this.readFile(pathToFile);

    return key.verify(fileBuffer, b64signature, 'binary', 'base64');
  }
}
