import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Languages } from '@constants/languages';
import { Regions } from '@constants/regions';
import { IUser } from '@interfaces/user';

@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    balanceId: number;

    @Column({nullable: true})
    userName: string;

    @Column()
    password: number;

    @Column()
    phone: string;

    @Column({nullable: true})
    language: Languages;

    @Column({nullable: true})
    regionId: Regions;
}
