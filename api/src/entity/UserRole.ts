import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IUserRole, UserRoles } from '@interfaces/user';

@Entity()
export class UserRole implements IUserRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roleId: UserRoles;

    @Column()
    userId: number;
}
