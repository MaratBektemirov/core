import { IUser, IUserAccessToken, IUserRole } from '@interfaces/user';

export enum Tables {
  user = 'public.user',
  user_access_token = 'public.user_access_token',
  user_role = 'public.user_role',
}

export interface TablesSpec {
  [Tables.user]: IUser;
  [Tables.user_access_token]: IUserAccessToken;
  [Tables.user_role]: IUserRole;
}
