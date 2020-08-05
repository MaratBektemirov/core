import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IReservation } from '@interfaces/reservation';

@Entity()
export class Reservation implements IReservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  realtyId: number;

  @Column()
  from: Date;

  @Column()
  to: Date;
}
