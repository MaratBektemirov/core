import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IUserAccessToken } from '@interfaces/user';
import { User } from './User';

@Entity()
export class UserAccessToken implements IUserAccessToken {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type) => User)
    userId: number;

    @Column()
    createdAt?: Date;
}
