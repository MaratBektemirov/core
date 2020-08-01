import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IUser } from '@interfaces/user';
import { Languages } from '@constants/languages';
import { Regions } from '@constants/regions';

@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    balanceId: number;

    @Column()
    userName: string;

    @Column()
    password: number;

    @Column()
    phone: string;

    @Column()
    language: Languages;

    @Column()
    regionId: Regions;
}
