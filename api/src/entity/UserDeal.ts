import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IUserDeal } from '@interfaces/userDeal';
import { CreateDateColumn } from 'typeorm/index';

@Entity()
export class UserDeal implements IUserDeal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  checksum: string;

  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date;

  @Column()
  realtyId: number;

  @Column()
  userId: number;
}
