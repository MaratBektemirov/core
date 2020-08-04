import { RealtySpaceItem } from '@interfaces/realty';

export const TR = {
  RU: {
    auth: {
      title: 'Авторизация',
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
