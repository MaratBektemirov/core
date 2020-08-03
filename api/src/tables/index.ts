import { IUser, IUserAccessToken, IUserRole } from '@interfaces/user';

export enum Tables {
  user = 'public.user',
  userAccessToken = 'public.user_access_token',
  userRole = 'public.user_role',
}

export interface TablesSpec {
  [Tables.user]: IUser;
  [Tables.userAccessToken]: IUserAccessToken;
  [Tables.userRole]: IUserRole;
}
