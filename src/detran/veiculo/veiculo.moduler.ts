import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { VeiculoController } from './veiculo.controller';
import { veiculoProviders } from './veiculo.provider';
import { VeiculoService} from './veiculo.service';

@Module({
    imports: [DatabaseModule],
    controllers: [VeiculoController],
    providers: [
      ...veiculoProviders,
      VeiculoService,
    ],
  })
  export class VeiculoModule {}