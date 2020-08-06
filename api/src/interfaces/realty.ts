export enum RealtyPurpose {
  default,
  cafe,
  manufacture,
  office,
  retail,
  store,
}

export enum RealtySpaceItem {
  squareFoot
}

export enum RealtyOfficeCategory {
  A = 'A',
  B = 'B',
}

export interface IRealty {
  id: number;
  purpose: RealtyPurpose;
  address: string;
  space: number;
  pricePerSpaceItem: number;
  spaceItem: RealtySpaceItem;
  cityId: number;
  officeCategory: RealtyOfficeCategory;
  districtId: number;
  floor: number;
  conference: boolean;
  priceIncreasePerMonth: number;
  utilityBillCost: number;
  rentRate: number;
  photoId: number;
  cadastralNumber: string;
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
