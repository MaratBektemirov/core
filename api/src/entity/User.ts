import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Languages } from '@constants/languages';
import { Regions } from '@constants/regions';
import { IUser } from '@interfaces/user';

@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    surname: string;

    @Column({nullable: true})
    patronymic: string;

    @Column()
    password: number;

    @Column({unique: true})
    phone: string;

    @Column({nullable: true})
    language: Languages;

    @Column({nullable: true})
    regionId: Regions;

    @Column({default: 0})
    balance: number;

    @Column({default: 0})
    onHoldBalance: number;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;
}
