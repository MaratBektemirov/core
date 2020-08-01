import { Languages } from '@constants/languages';

export enum Regions {
  RU,
  AZ,
}

export enum RU {
  MSK,
  TAT
}

export enum AZ {
  BAKU
}

export const RegionsLanguages = {
  [Regions.RU]: Languages.RU,
  [Regions.AZ]: Languages.RU,
};

export function getRegions(language: Languages) {
  return [

  ];
}
