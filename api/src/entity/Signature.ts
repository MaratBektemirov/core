import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ISignature } from '@interfaces/signiture';

@Entity()
export class Signature implements ISignature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  agreementId: number;
}
