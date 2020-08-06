import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IUserRealty } from '@interfaces/userRealty';
import { ColumnNumericTransformer } from '@api/transformers/numeric.transformer';

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

    @Column('numeric', {
      precision: 7,
      scale: 2,
      transformer: new ColumnNumericTransformer(),
    })
    space: number;

    @Column({nullable: true})
    reservedUserId: number;
}
