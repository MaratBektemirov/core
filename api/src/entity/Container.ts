import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ContainerType, IContainer } from '@interfaces/container';

@Entity()
export class Container implements IContainer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lift: boolean;

    @Column()
    name: string;

    @Column()
    parking: boolean;

    @Column()
    photoId: number;

    @Column()
    serviceLift: boolean;

    @Column()
    twentyFourHours: boolean;

    @Column()
    type: ContainerType;

    @Column()
    weekends: boolean;
}
