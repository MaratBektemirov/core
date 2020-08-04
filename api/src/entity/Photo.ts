import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IPhoto } from '@interfaces/photo';

@Entity()
export class Photo implements IPhoto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
