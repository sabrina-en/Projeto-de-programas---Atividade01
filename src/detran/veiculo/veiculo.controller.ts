import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ResultadoDto } from "dto/resultado.dto";
import { VeiculosEditDTO } from "../dto/veiculoDTO/veiculo.edit.dto";
import { VeiculosCreateDTO } from "../dto/veiculoDTO/veiculos.create.dto";
import { Veiculo } from "./veiculo.entity";
import { VeiculoService } from "./veiculo.service";

@Controller('veiculo')
export class VeiculoController{
    constructor(private readonly veiculoService: VeiculoService){
    }

    @Get('listar')
    async listar(): Promise<Veiculo[]>{
        return this.veiculoService.listar()
    }
    @Post('cadastrar')
    async cadastrar(@Body() data: VeiculosCreateDTO): Promise<ResultadoDto>{
       return this.veiculoService.cadastrarr(data)
    }
    @Put('update')
    async update(@Body() data: VeiculosEditDTO, @Param('id') id ): Promise<any>{
       data.id = Number(id);
       return this.veiculoService.update(data);
    }
    @Delete('delete')
    async delete(@Param('id')id):Promise<any>{
        return this.veiculoService.delete(id);
    }
}
