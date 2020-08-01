import { Languages } from '@constants/languages';
import { Regions } from '@constants/regions';
import { UserUI } from '@interfaces/ui';

export const SYSTEM_USER = 0;
export const API_PORT = 80;
export const GUEST_USER: UserUI = {
  language: Languages.RU,
  id: null,
  userName: 'guest',
  balanceId: null,
  regionId: Regions.RU,
  phone: null,
};
