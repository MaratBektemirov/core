export interface IDeal {
  id: number;
  realtyId: number;
  agreementId: number; /**< reference to agreement document */
  date: Date;
}
