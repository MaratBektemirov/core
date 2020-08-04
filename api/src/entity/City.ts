import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ICity } from '@interfaces/city';

@Entity()
export class City implements ICity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
