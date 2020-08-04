import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IRealty, RealtyCategory, RealtyPurpose, RealtySpaceItem } from '@interfaces/realty';

@Entity()
export class Realty implements IRealty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  category: RealtyCategory;

  @Column()
  cityId: number;

  @Column()
  conference: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  districtId: number;

  @Column()
  floor: number;

  @Column()
  freeSpace: number;

  @Column()
  phone: string;

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

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  utilityBillCost: number;
}
