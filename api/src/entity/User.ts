import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Languages } from '@constants/languages';
import { Regions } from '@constants/regions';
import { IUser } from '@interfaces/user';

@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    balanceId: number;

    @Column({nullable: true, unique: true})
    userName: string;

    @Column()
    password: number;

    @Column({unique: true})
    phone: string;

    @Column({nullable: true})
    language: Languages;

    @Column({nullable: true})
    regionId: Regions;

    @Column('int', { array: true })
    deals: number[];

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;
}
