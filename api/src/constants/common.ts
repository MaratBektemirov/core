import { Languages } from '@constants/languages';
import { Regions } from '@constants/regions';
import { UserUI } from '@interfaces/ui';

export const SYSTEM_USER = 0;
export const API_PORT = 1025;
export const GUEST_USER: UserUI = {
  balance: null,
  onHoldBalance: null,
  language: Languages.RU,
  id: null,
  name: 'guest',
  surname: null,
  patronymic: null,
  regionId: Regions.RU,
  phone: null,
  deals: null,
  createdAt: null,
  updatedAt: null
};
