import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ResultadoDto } from "dto/resultado.dto";
import { HabilitadosCreateDTO } from "../dto/habilitadosDTO/habilitados.create.dto";
import { HabilitadosEditDTO } from "../dto/habilitadosDTO/habilitados.edit.dto";
import { Habilitado } from "./habilitados.entity";
import { HabilitadoService } from "./habilitados.service";

@Controller('habilitado')
export class HabilitadoController{
    constructor(private readonly habilitadoService: HabilitadoService){
    }

    @Get('listar')
    async listar(): Promise<Habilitado[]>{
        return this.habilitadoService.listar()
    }
    @Post('cadastrar')
    async cadastrar(@Body() data: HabilitadosCreateDTO): Promise<ResultadoDto>{
       return this.habilitadoService.cadastrarr(data)
    }
    @Put('update')
    async update(@Body() data: HabilitadosEditDTO, @Param('id') id ): Promise<any>{
       data.id = Number(id);
       return this.habilitadoService.update(data);
    }
    @Delete('delete')
    async delete(@Param('id')id):Promise<any>{
        return this.habilitadoService.delete(id);
    }
}
