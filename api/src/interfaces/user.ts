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
  balanceId: number;
  regionId: Regions;
  userName: string;
  password: number;
  phone: string;
  language: Languages;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserAccessToken {
  id: string;
  userId: number;
  createdAt: Date;
}
