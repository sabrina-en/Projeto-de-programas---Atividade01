import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { HabilitadoController } from './habilitado.controller';
import { HabilitadoService } from './habilitados.service';
import { habilitadoProviders} from './habilitado.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [HabilitadoController],
    providers: [
      ...habilitadoProviders,
      HabilitadoService,
    ],
  })
  export class HabilitadoModule {}