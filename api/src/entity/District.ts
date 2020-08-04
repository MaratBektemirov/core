import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IDistrict } from '@interfaces/disctrict';

@Entity()
export class District implements IDistrict {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cityId: number;

    @Column()
    name: string;
}
