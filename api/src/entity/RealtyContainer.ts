import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IRealtyContainer } from '@interfaces/realty';

@Entity()
export class RealtyContainer implements IRealtyContainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  realtyId: number;
}
