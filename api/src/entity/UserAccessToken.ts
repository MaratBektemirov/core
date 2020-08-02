import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';
import { IUserAccessToken } from '@interfaces/user';

@Entity()
export class UserAccessToken implements IUserAccessToken {
    @PrimaryColumn({ generated: 'uuid' })
    id: string;

    @Column()
    userId: number;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;
}
