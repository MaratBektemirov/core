import { IUser } from '@interfaces/user';
import { Message } from '@interfaces/message';
import { IRealty, IRealtyMetro } from '@interfaces/realty';
import { IPhoto } from '@interfaces/photo';
import { IMetro } from '@interfaces/metro';

export interface UserUI extends Omit<IUser, 'password'> {

}

export interface MetroUI extends IRealtyMetro {
  metro: IMetro;
}

// tslint:disable-next-line:no-empty-interface
export interface RealtyUI extends IRealty {
  // city: ICity;
  // district: IDistrict;
  // photo: IPhoto;
  // metros: MetroUI[];
}

export interface UserRealtyUI extends RealtyUI {
  fullPrice: number;
  userSpace: number;
  startOwner: Date;
  phone: string;
  owner: string;
  price: number;
}

export interface MessageUI extends Message {
  recipientName: string;
}
