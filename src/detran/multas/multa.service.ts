import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'dto/resultado.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { MultasCreateDTO } from '../dto/multasDTO/multas.create.dto';
import { MultasEditDTO } from '../dto/multasDTO/multas.edit.dto';
import { Multa } from './multa.entity';

@Injectable()
export class MultaService {
  constructor(
    @Inject('MULTA_REPOSITORY')
    private multaRepository: Repository<Multa>,
  ) {}

  async listar(): Promise<Multa[]> {
    return this.multaRepository.find();
  }
  async cadastrarr(data: MultasCreateDTO): Promise<ResultadoDto>{
    let multtas = new Multa()
        multtas.class_da_multa = data.class_da_multa
        multtas.pontos = data.pontos
        return this.multaRepository.save(multtas).then((result)=>{
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

  async update( data: MultasEditDTO): Promise<UpdateResult>{
    return await this.multaRepository.update(data.id, data);
  }

  async delete(id): Promise<DeleteResult>{
    return await this.multaRepository.delete(id);
  }

}