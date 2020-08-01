import { UserUI } from '@interfaces/ui';
import { IUserAccessToken } from '@interfaces/user';

export interface LoginRequest {
  phone: string;
  password: number;
}

export interface LogoutRequest {
  tokenId: string;
}

export interface LoginResponse {
  token: IUserAccessToken;
  user: UserUI;
}
