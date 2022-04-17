import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Veiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  placa: number;

  @Column({length: 255})
  cor: string;

  @Column({length: 255})
  tipo: string;
}
