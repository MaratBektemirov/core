import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IMetro } from '@interfaces/metro';

@Entity()
export class Metro implements IMetro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cityId: number;

    @Column()
    color: string;

    @Column()
    name: string;
}
