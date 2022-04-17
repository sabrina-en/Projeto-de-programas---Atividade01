import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ResultadoDto } from "dto/resultado.dto";
import { MultasCreateDTO } from "../dto/multasDTO/multas.create.dto";
import { MultasEditDTO } from "../dto/multasDTO/multas.edit.dto";
import { Multa } from "./multa.entity";
import { MultaService } from "./multa.service";

@Controller('multa')
export class MultaController{
    constructor(private readonly multaService: MultaService){
    }

    @Get('listar')
    async listar(): Promise<Multa[]>{
        return this.multaService.listar()
    }
    @Post('cadastrar')
    async cadastrar(@Body() data: MultasCreateDTO): Promise<ResultadoDto>{
       return this.multaService.cadastrarr(data)
    }

    @Put('update')
    async update(@Body() data: MultasEditDTO, @Param('id') id ): Promise<any>{
       data.id = Number(id);
       return this.multaService.update(data);
    }
    @Delete('delete')
    async delete(@Param('id')id):Promise<any>{
        return this.multaService.delete(id);
    }

}