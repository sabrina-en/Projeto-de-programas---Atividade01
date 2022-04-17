import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cadastro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column('int')
  registro_cnh: number;

}
