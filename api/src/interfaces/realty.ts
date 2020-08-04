export enum RealtyPurpose {
  default,
  cafe,
  manufacture,
  commercial,
  retail,
  store,
}

export enum RealtySpaceItem {
  squareFoot
}

export enum RealtyCategory {
  A = 'A',
  B = 'B',
}

export interface IRealty {
  id: number;
  purpose: RealtyPurpose;
  address: string;
  space: number;
  freeSpace: number;
  pricePerSpaceItem: number;
  spaceItem: RealtySpaceItem;
  cityId: number;
  category: RealtyCategory;
  districtId: number;
  floor: number;
  conference: boolean;
  phone: string;
  utilityBillCost: number;
  photoId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IRealtyMetro {
  id: number;
  realtyId: number;
  metroId: number;
  time: number;
}

export interface IRealtyContainer {
  id: number;
  realtyId: number;
}
