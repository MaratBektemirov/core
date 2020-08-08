import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IUserDeal } from '@interfaces/userDeal';
import { CreateDateColumn } from 'typeorm/index';

@Entity()
export class UserDeal implements IUserDeal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  documentId: number;

  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date;

  @Column()
  realtyId: number;

  @Column()
  userId: number;

  @Column()
  sign: string;
}
