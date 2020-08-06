import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IDocument } from '@interfaces/document';
import { Column } from 'typeorm/index';

@Entity()
export class Document implements IDocument {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;

    @Column()
    checksum: string;

    @Column()
    path: string;
}
