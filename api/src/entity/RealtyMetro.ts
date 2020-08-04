import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IRealtyMetro } from '@interfaces/realty';

@Entity()
export class RealtyMetro implements IRealtyMetro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  metroId: number;

  @Column()
  realtyId: number;

  @Column()
  time: number;
}
