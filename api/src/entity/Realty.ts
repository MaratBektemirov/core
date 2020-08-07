import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IRealty, RealtyOfficeCategory, RealtyPurpose, RealtySpaceItem } from '@interfaces/realty';

@Entity()
export class Realty implements IRealty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  officeCategory: RealtyOfficeCategory;

  @Column()
  cityId: number;

  @Column()
  conference: boolean;

  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date;

  @Column()
  districtId: number;

  @Column()
  floor: number;

  @Column()
  photoId: number;

  @Column()
  pricePerSpaceItem: number;

  @Column()
  purpose: RealtyPurpose;

  @Column()
  space: number;

  @Column()
  spaceItem: RealtySpaceItem;

  @Column()
  priceIncreasePerMonth: number;

  @UpdateDateColumn({type: 'timestamp'})
  updatedAt: Date;

  @Column()
  utilityBillCost: number;

  @Column()
  rentRate: number;

  @Column({nullable: true})
  cadastralNumber: string;
}
