import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { MultaController } from './multa.controller';
import { multaProviders } from './multa.provider';
import { MultaService } from './multa.service';

@Module({
    imports: [DatabaseModule],
    controllers: [MultaController],
    providers: [
      ...multaProviders,
      MultaService,
    ],
  })
  export class MultaModule {}