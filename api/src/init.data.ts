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
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:001',
      }, {
        photoUrl: '/assets/images/stock-photo-182024669.jpg',
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
        cadastralNumber: '50:08:01:05050:002',
      }, {
        photoUrl: '/assets/images/stock-photo-182024725.jpg',
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
        cadastralNumber: '50:08:01:05050:003',
      }, {
        photoUrl: '/assets/images/stock-photo-211386375.jpg',
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
        cadastralNumber: '50:08:01:05050:003',
      }, {
        photoUrl: '/assets/images/stock-photo-230634153.jpg',
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
        cadastralNumber: '50:08:01:05050:004',
      }, {
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:005',
      }
    ], connection);

    const realties1 = await saveData(Realty, [
      {
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:006',
      }, {
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:006',
      }, {
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:007',
      }, {
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:008',
      }, {
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:009',
      }, {
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:010',
      }
    ], connection);

    const realties2 = await saveData(Realty, [
      {
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:011',
      }, {
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:012',
      }, {
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:013',
      }, {
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:014',
      }, {
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:015',
      }, {
        photoUrl: '/assets/images/stock-photo-135205347.jpg',
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
        cadastralNumber: '50:08:01:05050:016',
      }
    ], connection);

    const users = await saveData(User, [
      {
        phone: '79621234567',
        password: 123,
        name: 'Иван',
        surname: 'Иванов',
        patronymic: 'Иванович',
        balance: 10000000,
        language: Languages.RU,
        passportNumber: 777777,
        passportSerial: 4509,
        passportIssuer: 'отд. по району Богородское ОУФМС России по г. Москве, код подразделения 770-045',
        passportDate: new Date('2015-07-10'),
        registrationAddress: 'г. Москва, ул. Миллионная, д. 11, корп. 1, кв. 100',
        birthDate: new Date('1994-02-17'),
        birthPlace: 'г. Москва',
        publicKey: '-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJJK+Toh3dg58doz8TUreIAr7OgoumMDKpBbKtsT2c7edvZTyXJDUPFIb36T+X3ll3XeL/VkcdGuOGUYZPw0JXcCAwEAAQ==-----END PUBLIC KEY-----'
      },
      {
        phone: '79621234568',
        password: 123,
        name: 'Петр',
        surname: 'Петров',
        patronymic: 'Петрович',
        balance: 10000000,
        language: Languages.RU,
        passportNumber: 777777,
        passportSerial: 4510,
        passportIssuer: 'отд.   по району   Чертаново Центральное ОУФМС России по г. Москве в ЮАО 10.08.2006, код подразделения 770-045',
        passportDate: new Date('2015-07-10'),
        registrationAddress: 'г. Москва, ул. Кировоградская, д. 17, кв. 555',
        birthDate: new Date('1986-10-08'),
        birthPlace: 'г. Москва',
        publicKey: '-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALQX9PzIpodwwft4v/lg9g4wrO6HgM/QEBZjNT9CugxfGcwS5KAuSzPrv3ZIiSqNX/KspQVZdqXASdtlOkXVwl8CAwEAAQ==-----END PUBLIC KEY-----'
      },
      {
        phone: '79621234569',
        password: 123,
        name: 'Валентина',
        surname: 'Смирнова',
        patronymic: 'Викторовна',
        balance: 10000000,
        language: Languages.RU,
        passportNumber: 333333,
        passportSerial: 4510,
        passportIssuer: 'отд.  по району Чертаново    Центральное ОУФМС России по г. Москве в ЮАО 10.09.2008, код подразделения 770-044',
        passportDate: new Date('2015-07-10'),
        registrationAddress: 'г. Москва, ул. Кировоградская, д. 17, кв. 555',
        birthDate: new Date('1986-10-08'),
        birthPlace: 'г. Москва',
        publicKey: '-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMDmicHWlY6uyZGq1juE3V5X0o3q2KZNVgn7aG+3l95NopeO4g1MGgm/ADmwyN/rtBcolrOCMc6b7DBWzTeKzZECAwEAAQ==-----END PUBLIC KEY-----'
      }
    ], connection);

    const realtiesArr = [
      {user: users[0], realties: realties0, count: 2},
      {user: users[1], realties: realties1, count: 3},
      {user: users[2], realties: realties2, count: 4},
    ];

    for (const {user, realties, count} of realtiesArr) {
      for (const realty of realties) {
        for (let i = 0; i < count; i++) {
          await saveData(UserRealty, [
            {
              realtyId: realty.id,
              userId: user.id,
              startOwner: new Date('2019.12'),
              space: realty.space / count,
            }
          ], connection);
        }
      }
    }
  });
}
