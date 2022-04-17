import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Habilitado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 255})
  categoria: string;

}
