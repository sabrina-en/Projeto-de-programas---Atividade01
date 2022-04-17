import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'dto/resultado.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { HabilitadosCreateDTO } from '../dto/habilitadosDTO/habilitados.create.dto';
import { HabilitadosEditDTO } from '../dto/habilitadosDTO/habilitados.edit.dto';
import { Habilitado } from './habilitados.entity';

@Injectable()
export class HabilitadoService {
  constructor(
    @Inject('HABILITADO_REPOSITORY')
    private habilitadoRepository: Repository<Habilitado>,
  ) {}

  async listar(): Promise<Habilitado[]> {
    return this.habilitadoRepository.find();
  }
  async cadastrarr(data: HabilitadosCreateDTO): Promise<ResultadoDto>{
    let carteira = new Habilitado()
        carteira.categoria = data.categoria
        return this.habilitadoRepository.save(carteira).then((result)=>{
          return <ResultadoDto>{
            status: true,
            mensagem: "Categoria cadastrado com sucesso"
        }
        })
        .catch((erro)=>{
          return <ResultadoDto>{
            status: false,
            mensagem: "Houve um erro"
          }
        })
  }
  async update( data: HabilitadosEditDTO): Promise<UpdateResult>{
    return await this.habilitadoRepository.update(data.id, data);
  }

  async delete(id): Promise<DeleteResult>{
    return await this.habilitadoRepository.delete(id);
  }



}