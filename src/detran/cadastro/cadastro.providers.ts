import { Connection } from 'typeorm';
import { Cadastro } from './cadastro.entity';

export const cadastroProviders = [
    {
      provide: 'CADASTRO_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(Cadastro),
      inject: ['DATABASE_CONNECTION'],
    },
];