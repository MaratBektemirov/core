import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IDeal } from '@interfaces/deal';

@Entity()
export class Deal implements IDeal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  agreementId: number;

  @Column()
  date: Date;

  @Column()
  realtyId: number;
}
