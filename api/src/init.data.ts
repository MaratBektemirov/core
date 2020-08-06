import { Realty } from '@entity/Realty';
import { RealtyOfficeCategory, RealtyPurpose, RealtySpaceItem } from '@interfaces/realty';
import { Connection } from 'typeorm/index';
import { Data } from '@entity/Data';
import { UserRealty } from '@entity/UserRealty';
import { User } from '@entity/User';
import { Tables } from '@api/tables';
import { Languages } from '@constants/languages';

async function saveData<Entity>(entity: new () => Entity, entities: Partial<Entity>[], connection) {
  const toSave = entities.map((r) => Object.assign(new entity(), r));

  return await connection.getRepository(entity).save(toSave);
}

export async function writeData(connection: Connection, name: string, cb: () => any) {
  const data = await connection.getRepository(Data).find({name});

  if (data.length) {
    return;
  }

  await cb();

  console.log(`Migration:${name} is completed`);

  await saveData(Data, [{
    name,
  }], connection);
}

export async function writeAllData(connection: Connection) {
  // for (const table of [
  //   Tables.data,
  //   Tables.realty,
  //   Tables.userRealty,
  //   Tables.userAccessToken,
  //   Tables.userRole,
  //   Tables.user,
  // ]) {
  //   await connection.query(`TRUNCATE TABLE ${table};`);
  // }

  writeData(connection, 'initData', async () => {
    const realties0 = await saveData(Realty, [
      {
        address: 'г. Казань, ул. Пушкина д.105',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 0,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 28570,
        purpose: RealtyPurpose.office,
        space: 90,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 5000,
        rentRate: 40000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Пушкина д.25',
        cityId: 0,
        conference: true,
        districtId: 0,
        floor: 5,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 31818,
        purpose: RealtyPurpose.office,
        space: 80,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 5000,
        rentRate: 60000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Пушкина д.33',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 3,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 33400,
        purpose: RealtyPurpose.office,
        space: 70,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 5000,
        rentRate: 55000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Пушкина д.25',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 2,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 29000,
        purpose: RealtyPurpose.office,
        space: 100,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 5000,
        rentRate: 55000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Ершова д.28',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 2,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 29000,
        purpose: RealtyPurpose.office,
        space: 120,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 10000,
        rentRate: 90000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Пушкина д.22',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 2,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 29000,
        purpose: RealtyPurpose.office,
        space: 110,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 9000,
        rentRate: 80000,
        priceIncreasePerMonth: 1,
      }
    ], connection);

    const realties1 = await saveData(Realty, [
      {
        address: 'г. Казань, ул. Адоратского д.105',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 0,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 28570,
        purpose: RealtyPurpose.office,
        space: 90,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 5000,
        rentRate: 40000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Адоратского д.25',
        cityId: 0,
        conference: true,
        districtId: 0,
        floor: 5,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 31818,
        purpose: RealtyPurpose.office,
        space: 80,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 5000,
        rentRate: 60000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Адоратского д.33',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 3,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 33400,
        purpose: RealtyPurpose.office,
        space: 70,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 5000,
        rentRate: 55000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Адоратского д.25',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 2,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 29000,
        purpose: RealtyPurpose.office,
        space: 100,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 5000,
        rentRate: 55000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Адоратского д.28',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 2,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 29000,
        purpose: RealtyPurpose.office,
        space: 120,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 10000,
        rentRate: 90000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Адоратского д.22',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 2,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 29000,
        purpose: RealtyPurpose.office,
        space: 110,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 9000,
        rentRate: 80000,
        priceIncreasePerMonth: 1,
      }
    ], connection);

    const realties2 = await saveData(Realty, [
      {
        address: 'г. Казань, ул. Чистопольская д.105',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 0,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 28570,
        purpose: RealtyPurpose.office,
        space: 90,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 5000,
        rentRate: 40000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Чистопольская д.25',
        cityId: 0,
        conference: true,
        districtId: 0,
        floor: 5,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 31818,
        purpose: RealtyPurpose.office,
        space: 80,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 5000,
        rentRate: 60000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Чистопольская д.33',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 3,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 33400,
        purpose: RealtyPurpose.office,
        space: 70,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 5000,
        rentRate: 55000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Чистопольская д.25',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 2,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 29000,
        purpose: RealtyPurpose.office,
        space: 100,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 5000,
        rentRate: 55000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Чистопольская д.28',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 2,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 29000,
        purpose: RealtyPurpose.office,
        space: 120,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 10000,
        rentRate: 90000,
        priceIncreasePerMonth: 1,
      }, {
        address: 'г. Казань, ул. Чистопольская д.22',
        cityId: 0,
        conference: false,
        districtId: 0,
        floor: 2,
        officeCategory: RealtyOfficeCategory.A,
        photoId: 0,
        pricePerSpaceItem: 29000,
        purpose: RealtyPurpose.office,
        space: 110,
        spaceItem: RealtySpaceItem.squareFoot,
        utilityBillCost: 9000,
        rentRate: 80000,
        priceIncreasePerMonth: 1,
      }
    ], connection);

    const users = await saveData(User, [
      {
        phone: '79621234567',
        password: 123,
        name: 'Марат',
        surname: 'Сафин',
        patronymic: 'Лебедевич',
        balance: 10000000,
        language: Languages.RU,
      },
      {
        phone: '79621234568',
        password: 123,
        name: 'Ришат',
        surname: 'Арбузов',
        patronymic: 'Львович',
        balance: 10000000,
        language: Languages.RU,
      },
      {
        phone: '79621234569',
        password: 123,
        name: 'Дмитрий',
        surname: 'Шаймиев',
        patronymic: 'Березович',
        balance: 10000000,
        language: Languages.RU,
      }
    ], connection);

    const realtiesArr = [
      {user: users[0], realties: realties0},
      {user: users[1], realties: realties1},
      {user: users[2], realties: realties2},
    ];

    for (const {user, realties} of realtiesArr) {
      for (const realty of realties) {
        await saveData(UserRealty, [
          {
            realtyId: realty.id,
            userId: user.id,
            startOwner: new Date('2019.12'),
            space: realty.space,
          }
        ], connection);
      }
    }
  });
}
