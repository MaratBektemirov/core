import { IUser, IUserAccessToken, IUserRole } from '@interfaces/user';
import { IData } from '@interfaces/data';
import { IUserRealty } from '@interfaces/userRealty';
import { IRealty } from '@interfaces/realty';
import { IUserDeal } from '@interfaces/userDeal';
import { IDocument } from '@interfaces/document';

export enum Tables {
  user = 'public.user',
  userAccessToken = 'public.user_access_token',
  userRole = 'public.user_role',
  data = 'public.data',
  userRealty = 'public.user_realty',
  realty = 'public.realty',
  userDeal = 'public.user_deal',
  document = 'public.document',
}

export interface TablesSpec {
  [Tables.user]: IUser;
  [Tables.userAccessToken]: IUserAccessToken;
  [Tables.userRole]: IUserRole;
  [Tables.data]: IData;
  [Tables.userRealty]: IUserRealty;
  [Tables.realty]: IRealty;
  [Tables.userDeal]: IUserDeal;
  [Tables.document]: IDocument;
}
