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
  birthDate: Date;
  birthPlace: string;

  passportNumber: number;
  passportSerial: number;
  passportIssuer: string;
  passportDate: Date;
  registrationAddress: string;

  publicKey: string;
}

export interface IUserAccessToken {
  id: string;
  userId: number;
  createdAt: Date;
}
