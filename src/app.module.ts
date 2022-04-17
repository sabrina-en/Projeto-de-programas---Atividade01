import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastroModule } from './detran/cadastro/cadastro.module';
import { HabilitadoModule } from './detran/habilitados/habilitador.module';
import { MultaModule } from './detran/multas/multa.module';
import { VeiculoModule } from './detran/veiculo/veiculo.moduler';

@Module({
  imports: [
    CadastroModule,
    VeiculoModule,
    HabilitadoModule,
    MultaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
