import { IUser } from '@interfaces/user';
import { Message } from '@interfaces/message';
import { IRealty, IRealtyMetro } from '@interfaces/realty';
import { ICity } from '@interfaces/city';
import { IDistrict } from '@interfaces/disctrict';
import { IPhoto } from '@interfaces/photo';
import { IMetro } from '@interfaces/metro';

export interface UserUI extends Omit<IUser, 'password'> {

}

export interface MetroUI extends IRealtyMetro {
  metro: IMetro;
}

export interface RealtyUI extends IRealty {
  city: ICity;
  district: IDistrict;
  photo: IPhoto;
  metros: MetroUI[];
}

export interface UserRealtyUI extends RealtyUI {
  userSpace: number;
  userInvestments: number;
  profitAllTime: number;
}

export interface MessageUI extends Message {
  recipientName: string;
}
