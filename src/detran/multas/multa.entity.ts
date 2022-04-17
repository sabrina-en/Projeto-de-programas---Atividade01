import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Multa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  class_da_multa: string;

  @Column('int')
  pontos: number;

}
