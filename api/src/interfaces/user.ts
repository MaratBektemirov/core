import { Regions } from '@constants/regions';
import { Languages } from '@constants/languages';

export enum UserRoles {
  root,
  user,
  moderator,
  partner,
}

export interface IUserRole {
  id: number;
  userId: number;
  roleId: UserRoles;
}

export interface IUser {
  id: number;
  regionId: Regions;
  name: string;
  surname: string;
  patronymic: string;
  password: number;
  phone: string;
  language: Languages;
  deals: number[];
  createdAt: Date;
  updatedAt: Date;
  balance: number;
  onHoldBalance: number;
}

export interface IUserAccessToken {
  id: string;
  userId: number;
  createdAt: Date;
}
