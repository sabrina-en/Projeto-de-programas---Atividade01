import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'dto/resultado.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { VeiculosEditDTO } from '../dto/veiculoDTO/veiculo.edit.dto';
import { VeiculosCreateDTO } from '../dto/veiculoDTO/veiculos.create.dto';
import { Veiculo } from './veiculo.entity';

@Injectable()
export class VeiculoService {
  constructor(
    @Inject('VEICULO_REPOSITORY')
    private veiculoRepository: Repository<Veiculo>,
  ) {}

  async listar(): Promise<Veiculo[]> {
    return this.veiculoRepository.find();
  }
  async cadastrarr(data: VeiculosCreateDTO): Promise<ResultadoDto>{
    let carro = new Veiculo()
        carro.cor = data.cor
        carro.placa = data.placa
        carro.tipo = data.tipo
        return this.veiculoRepository.save(carro).then((result)=>{
          return <ResultadoDto>{
            status: true,
            mensagem: "Veiculo cadastrado com sucesso"
        }
        })
        .catch((erro)=>{
          return <ResultadoDto>{
            status: false,
            mensagem: "Houve um erro"
          }
        })
  }
  async update( data: VeiculosEditDTO): Promise<UpdateResult>{
    return await this.veiculoRepository.update(data.id, data);
  }

  async delete(id): Promise<DeleteResult>{
    return await this.veiculoRepository.delete(id);
  }



}