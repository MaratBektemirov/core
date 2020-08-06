export interface IDeal {
  id: number;
  userRealtyId: number;
  agreementId: number; /**< reference to agreement document */
  date: Date;
}
