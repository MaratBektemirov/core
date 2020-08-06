import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IUserRealty } from '@interfaces/userRealty';

@Entity()
export class UserRealty implements IUserRealty {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    realtyId: number;

    @Column({type: 'timestamp'})
    startOwner: Date;

    @Column()
    userId: number;

    @Column()
    space: number;
}
