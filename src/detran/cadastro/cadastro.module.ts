import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CadastroController } from './cadastro.controller';
import { cadastroProviders } from './cadastro.providers';
import { CadastroService } from './cadastro.service';

@Module({
    imports: [DatabaseModule],
    controllers: [CadastroController],
    providers: [
      ...cadastroProviders,
      CadastroService,
    ],
  })
  export class CadastroModule {}