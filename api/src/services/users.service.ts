import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { TokenService } from '@api/services/token.service';
import { Tables } from '@api/tables';
import { IUser } from '@interfaces/user';

import * as pdfCreator from 'pdf-creator-node';
import * as fs from 'fs';
import * as moment from 'moment';
import * as handlebars from 'handlebars';
import { UserUI } from '@interfaces/ui';
import { Languages } from '@constants/languages';
import { Regions } from '@constants/regions';
import { IRealty, RealtyOfficeCategory, RealtyPurpose, RealtySpaceItem } from '@interfaces/realty';

@Injectable()
export class UsersService {

  constructor(private db: DbService, private tokenService: TokenService) {
    const owner: IUser = {
      balance: null,
      onHoldBalance: null,
      language: Languages.RU,
      id: 0,
      name: 'Иван',
      surname: 'Иванов',
      patronymic: 'Иванович',
      regionId: Regions.RU,
      phone: null,
      deals: null,
      createdAt: null,
      updatedAt: null,
      passportNumber: 777777,
      passportSerial: 4509,
      passportIssuer: 'отд. по району Богородское ОУФМС России по г. Москве, код подразделения 770-045',
      passportDate: new Date('2015-07-10'),
      registrationAddress: 'г. Москва, ул. Миллионная, д. 11, корп. 1, кв. 100',
      password: 1111,
      birthDate: new Date('1994-02-17'),
      birthPlace: 'г. Москва'
    };

    const customer1: IUser = {
      balance: null,
      onHoldBalance: null,
      language: Languages.RU,
      id: 0,
      name: 'Петр',
      surname: 'Петров',
      patronymic: 'Петрович',
      regionId: Regions.RU,
      phone: null,
      deals: null,
      createdAt: null,
      updatedAt: null,
      passportNumber: 777777,
      passportSerial: 4510,
      passportIssuer: 'отд.   по району   Чертаново Центральное ОУФМС России по г. Москве в ЮАО 10.08.2006, код подразделения 770-045',
      passportDate: new Date('2015-07-10'),
      registrationAddress: 'г. Москва, ул. Кировоградская, д. 17, кв. 555',
      password: 1111,
      birthDate: new Date('1986-10-08'),
      birthPlace: 'г. Москва'
    };

    const customer2: IUser = {
      balance: null,
      onHoldBalance: null,
      language: Languages.RU,
      id: 0,
      name: 'Валентина',
      surname: 'Смирнова',
      patronymic: 'Викторовна',
      regionId: Regions.RU,
      phone: null,
      deals: null,
      createdAt: null,
      updatedAt: null,
      passportNumber: 333333,
      passportSerial: 4510,
      passportIssuer: 'отд.  по району Чертаново    Центральное ОУФМС России по г. Москве в ЮАО 10.09.2008, код подразделения 770-044',
      passportDate: new Date('2015-07-10'),
      registrationAddress: 'г. Москва, ул. Кировоградская, д. 17, кв. 555',
      password: 1111,
      birthDate: new Date('1986-10-08'),
      birthPlace: 'г. Москва'
    };

    const customers: IUser[] = [customer1, customer2];

    const realty: IRealty = {
      id: 11,
      purpose: RealtyPurpose.office,
      address: 'Московская область, г. Истра, ул. Советская, д.15, кв. 13',
      space: 160,
      pricePerSpaceItem: 80000,
      spaceItem: RealtySpaceItem.squareFoot,
      cityId: 1,
      officeCategory: RealtyOfficeCategory.A,
      districtId: 1,
      floor: 5,
      conference: false,
      priceIncreasePerMonth: 0,
      utilityBillCost: 0,
      rentRate: 0,
      photoId: 0,
      createdAt: new Date('2020-08-07'),
      updatedAt: new Date('2020-08-07'),
      cadastralNumber: '50:08:01:05050:001'
    };

    this.createAgreement(owner, customers, realty, './output.pdf');
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

  public createAgreement(owner: IUser, customers: IUser[], realty: IRealty, path: string) {
    const html = fs.readFileSync('template.html', 'utf8');

    const options = {
      format: 'A4',
      orientation: 'portrait',
      border: '10mm'
    };

    const DateFormats = {
      short: 'DD.MM.YYYY',
    };

    const document = {
      html: html,
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
      path: path
    };

    pdfCreator.create(document, options)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
