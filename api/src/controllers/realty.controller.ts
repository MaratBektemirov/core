import { BadRequestException, Body, Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { UsersService } from '@api/services/users.service';
import { TokenService } from '@api/services/token.service';
import { realtyApiEndpoints } from '@endpoints/realty';
import { RealtyUI, UserRealtyUI } from '@interfaces/ui';
import { RealtyOfficeCategory, RealtyPurpose, RealtySpaceItem } from '@interfaces/realty';

@Controller(realtyApiEndpoints.prefix)
export class RealtyController {
  constructor(private db: DbService,
              private tokenService: TokenService,
              private usersService: UsersService) {
  }

  @Get(realtyApiEndpoints.api.user)
  public async user(@Body() body: any): Promise<UserRealtyUI[]> {
    const realties: UserRealtyUI[] = [{
      priceIncreasePerMonth: 1,
      startOwner: new Date('2020.01'),
      address: 'г. Казань, ул. Пушкина д.105',
      city: {id: 1, name: 'Казань'},
      cityId: 0,
      conference: false,
      createdAt: undefined,
      district: undefined,
      districtId: 0,
      floor: 0,
      freeSpace: 20,
      id: 0,
      metros: [{id: 1, time: 10, metroId: null, metro: {name: 'Кремлевская', color: '#ff2f2f', id: 1, cityId: 1}, realtyId: 0}],
      officeCategory: RealtyOfficeCategory.A,
      phone: '+7 900 000 00 01',
      photo: undefined,
      photoId: 0,
      pricePerSpaceItem: 28570,
      purpose: RealtyPurpose.office,
      space: 90,
      userSpace: 35,
      userInvestments: 1000000,
      spaceItem: RealtySpaceItem.squareFoot,
      updatedAt: undefined,
      utilityBillCost: 5000,
      profitAllTime: 120000,
      rentRate: 40000,
    }, {
      priceIncreasePerMonth: 1,
      startOwner: new Date('2019.12'),
      address: 'г. Казань, ул. Пушкина д.25',
      city: {id: 1, name: 'Казань'},
      cityId: 0,
      conference: false,
      createdAt: undefined,
      district: undefined,
      districtId: 0,
      floor: 0,
      freeSpace: 0,
      id: 1,
      metros: [{id: 1, time: 10, metroId: null, metro: {name: 'Кремлевская', color: '#ff2f2f', id: 1, cityId: 1}, realtyId: 0}],
      officeCategory: RealtyOfficeCategory.A,
      phone: '+7 900 000 00 02',
      photo: undefined,
      photoId: 0,
      pricePerSpaceItem: 31818,
      purpose: RealtyPurpose.office,
      space: 80,
      userSpace: 22,
      userInvestments: 700000,
      spaceItem: RealtySpaceItem.squareFoot,
      updatedAt: undefined,
      utilityBillCost: 5000,
      profitAllTime: 150000,
      rentRate: 60000,
    }, {
      priceIncreasePerMonth: 1,
      startOwner: new Date('2020.3'),
      address: 'г. Казань, ул. Пушкина д.33',
      city: {id: 1, name: 'Казань'},
      cityId: 0,
      conference: false,
      createdAt: undefined,
      district: undefined,
      districtId: 0,
      floor: 0,
      freeSpace: 20,
      id: 2,
      metros: [{id: 1, time: 10, metroId: null, metro: {name: 'Кремлевская', color: '#ff2f2f', id: 1, cityId: 1}, realtyId: 0}],
      officeCategory: RealtyOfficeCategory.A,
      phone: '+7 900 000 00 03',
      photo: undefined,
      photoId: 0,
      pricePerSpaceItem: 33400,
      purpose: RealtyPurpose.office,
      space: 70,
      spaceItem: RealtySpaceItem.squareFoot,
      updatedAt: undefined,
      utilityBillCost: 5000,
      userSpace: 15,
      userInvestments: 500000,
      profitAllTime: 700000,
      rentRate: 55000,
    }];

    return realties;
  }

  @Get(realtyApiEndpoints.api.all)
  public async all(@Body() body: any): Promise<RealtyUI[]> {
    const realties: RealtyUI[] = [{
      priceIncreasePerMonth: 1,
      rentRate: 50000,
      address: 'г. Казань, ул. Пушкина д.55',
      city: {id: 1, name: 'Казань'},
      cityId: 0,
      conference: false,
      createdAt: undefined,
      district: undefined,
      districtId: 0,
      floor: 0,
      freeSpace: 0,
      id: 0,
      metros: [{id: 1, time: 10, metroId: null, metro: {name: 'Кремлевская', color: '#ff2f2f', id: 1, cityId: 1}, realtyId: 0}],
      officeCategory: RealtyOfficeCategory.A,
      phone: '+7 900 000 00 00',
      photo: undefined,
      photoId: 0,
      pricePerSpaceItem: 0,
      purpose: RealtyPurpose.office,
      space: 70,
      spaceItem: RealtySpaceItem.squareFoot,
      updatedAt: undefined,
      utilityBillCost: 5200,
    }, {
      priceIncreasePerMonth: 1,
      rentRate: 55000,
      address: 'г. Казань, ул. Пушкина д.78',
      city: {id: 1, name: 'Казань'},
      cityId: 0,
      conference: false,
      createdAt: undefined,
      district: undefined,
      districtId: 0,
      floor: 0,
      freeSpace: 0,
      id: 0,
      metros: [{id: 1, time: 10, metroId: null, metro: {name: 'Кремлевская', color: '#ff2f2f', id: 1, cityId: 1}, realtyId: 0}],
      officeCategory: RealtyOfficeCategory.A,
      phone: '+7 900 000 00 00',
      photo: undefined,
      photoId: 0,
      pricePerSpaceItem: 0,
      purpose: RealtyPurpose.office,
      space: 90,
      spaceItem: RealtySpaceItem.squareFoot,
      updatedAt: undefined,
      utilityBillCost: 4800,
    }, {
      priceIncreasePerMonth: 1,
      rentRate: 35000,
      address: 'г. Казань, ул. Пушкина д.22',
      city: {id: 1, name: 'Казань'},
      cityId: 0,
      conference: false,
      createdAt: undefined,
      district: undefined,
      districtId: 0,
      floor: 0,
      freeSpace: 0,
      id: 0,
      metros: [{id: 1, time: 10, metroId: null, metro: {name: 'Кремлевская', color: '#ff2f2f', id: 1, cityId: 1}, realtyId: 0}],
      officeCategory: RealtyOfficeCategory.A,
      phone: '+7 900 000 00 00',
      photo: undefined,
      photoId: 0,
      pricePerSpaceItem: 0,
      purpose: RealtyPurpose.office,
      space: 110,
      spaceItem: RealtySpaceItem.squareFoot,
      updatedAt: undefined,
      utilityBillCost: 4500,
    }, {
      priceIncreasePerMonth: 1,
      rentRate: 45000,
      address: 'г. Казань, ул. Баумана д.100',
      city: {id: 1, name: 'Казань'},
      cityId: 0,
      conference: false,
      createdAt: undefined,
      district: undefined,
      districtId: 0,
      floor: 0,
      freeSpace: 0,
      id: 0,
      metros: [{id: 1, time: 10, metroId: null, metro: {name: 'Кремлевская', color: '#ff2f2f', id: 1, cityId: 1}, realtyId: 0}],
      officeCategory: RealtyOfficeCategory.A,
      phone: '+7 900 000 00 01',
      photo: undefined,
      photoId: 0,
      pricePerSpaceItem: 0,
      purpose: RealtyPurpose.office,
      space: 45,
      spaceItem: RealtySpaceItem.squareFoot,
      updatedAt: undefined,
      utilityBillCost: 2300,
    }, {
      priceIncreasePerMonth: 1,
      rentRate: 60000,
      address: 'г. Казань, ул. Ершова д.37',
      city: {id: 1, name: 'Казань'},
      cityId: 0,
      conference: false,
      createdAt: undefined,
      district: undefined,
      districtId: 0,
      floor: 0,
      freeSpace: 0,
      id: 0,
      metros: [{id: 1, time: 10, metroId: null, metro: {name: 'Кремлевская', color: '#ff2f2f', id: 1, cityId: 1}, realtyId: 0}],
      officeCategory: RealtyOfficeCategory.A,
      phone: '+7 900 000 00 02',
      photo: undefined,
      photoId: 0,
      pricePerSpaceItem: 0,
      purpose: RealtyPurpose.office,
      space: 45,
      spaceItem: RealtySpaceItem.squareFoot,
      updatedAt: undefined,
      utilityBillCost: 2800,
    }];

    return realties;
  }
}
