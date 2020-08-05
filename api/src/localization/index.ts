import { RealtyOfficeCategory, RealtyPurpose, RealtySpaceItem } from '@interfaces/realty';

export const TR = {
  RU: {
    brand: 'InvestHub',
    description: 'Инвестиционная площадка нового поколения',
    auth: {
      error: 'Неверный телефон или пароль',
    },
    common: {
      login: 'Вход',
      registration: 'Регистрация',
      forgotPassword: 'Забыли пароль ?',
      phone: 'Телефон',
      password: 'Пароль',
      passwordAgain: 'Пароль ещё раз',
      send: 'Отправить',
      error: 'Ошибка',
      logout: 'Выход',
      profile: 'Профиль',
      search: 'Поиск',
      perMonth: 'в месяц',
    },
    cabinet: {
      myRealty: 'Моя недвижимость',
    },
    realty: {
      purposeTitle: 'Назначение',
      categoryTitle: 'Класс офиса',
      officeCategory: {
        [RealtyOfficeCategory.A]: 'A',
        [RealtyOfficeCategory.B]: 'B',
        null: 'Не важно',
      },
      purpose: {
        [RealtyPurpose.store]: 'склад',
        [RealtyPurpose.retail]: 'магазин',
        [RealtyPurpose.default]: 'свободное',
        [RealtyPurpose.manufacture]: 'производство',
        [RealtyPurpose.office]: 'офис',
        [RealtyPurpose.cafe]: 'кафе',
      }
    },
    search: {
      resetFilters: 'Сбросить',
    },
    units: {
      [RealtySpaceItem.squareFoot]: 'кв. м',
    }
  },
  EN: {
    auth: {
      title: 'Authorization',
      error: '',
    },
    common: {
      login: '',
      registration: '',
      forgotPassword: '',
      phone: '',
      password: '',
      passwordAgain: '',
      send: '',
      error: 'Error',
      logout: '',
      profile: '',
    }
  }
};
