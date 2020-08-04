import { RealtyCategory, RealtyPurpose, RealtySpaceItem } from '@interfaces/realty';

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
    },
    realty: {
      purposeTitle: 'Назначение',
      categoryTitle: 'Класс',
      category: {
        [RealtyCategory.A]: 'A',
        [RealtyCategory.B]: 'B',
        OTHER: 'Другое',
      },
      purpose: {
        [RealtyPurpose.store]: 'склад',
        [RealtyPurpose.retail]: 'магазин',
        [RealtyPurpose.default]: 'свободное',
        [RealtyPurpose.manufacture]: 'производство',
        [RealtyPurpose.commercial]: 'коммерция',
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
