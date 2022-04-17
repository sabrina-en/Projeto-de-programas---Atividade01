import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'dto/resultado.dto';
import { Repository } from 'typeorm';
import { CadastroCreateDTO } from '../dto/cadastroDTO/cadastro.create.dto';
import { CadastroEditDTO } from '../dto/cadastroDTO/cadastro.edit';
import { Cadastro } from './cadastro.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CadastroService {
  constructor(
    @Inject('CADASTRO_REPOSITORY')
    private cadastroRepository: Repository<Cadastro>,
  ) {}

  async listar(): Promise<Cadastro[]> {
    return this.cadastroRepository.find();
  }
  async cadastrarr(data: CadastroCreateDTO): Promise<ResultadoDto>{
    let motorista = new Cadastro()
        motorista.name = data.name
        motorista.registro_cnh = data.registro_cnh
        return this.cadastroRepository.save(motorista).then((result)=>{
          return <ResultadoDto>{
            status: true,
            mensagem: "Motorista cadastrado com sucesso"
        }
        })
        .catch((erro)=>{
          return <ResultadoDto>{
            status: false,
            mensagem: "Cadastro do usúario falhou"
          }
        })
  }

  async update(id: number, data: CadastroEditDTO){
    return await this.cadastroRepository.update(id, data);
  }

  async delete(id: number){
    return await this.cadastroRepository.delete(id);
  }

}
