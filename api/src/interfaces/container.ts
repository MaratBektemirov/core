export enum ContainerType {
  business,
  mall,
  industrial,
  house,
  street,
}

export interface IContainer {
  id: number;
  type: ContainerType;
  name: string;
  parking: boolean;
  lift: boolean;
  serviceLift: boolean;
  weekends: boolean;
  twentyFourHours: boolean;
  photoId: number;
}
