import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { ResultadoDto } from "dto/resultado.dto";
import { asapScheduler } from "rxjs";
import { CadastroCreateDTO } from "../dto/cadastroDTO/cadastro.create.dto";
import { CadastroEditDTO } from "../dto/cadastroDTO/cadastro.edit";
import { Cadastro } from "./cadastro.entity";
import { CadastroService } from "./cadastro.service";

@Controller('cadastro')
export class CadastroController{
    constructor(private readonly cadastroService: CadastroService){
    }

    @Get('listar')
    async listar(): Promise<Cadastro[]>{
        return this.cadastroService.listar()
    }

    @Post('cadastrar')
    async cadastrar(@Body() data: CadastroCreateDTO): Promise<ResultadoDto>{
        return this.cadastroService.cadastrarr(data)
     }
     @Put('update')
     async update(@Param('id') id: number ,@Body() data: CadastroEditDTO){
        return await this.cadastroService.update(id,data);
     }

     @Delete('delete')
     async delete(@Param('id')id: number){
         return await this.cadastroService.delete(id);
     }
}